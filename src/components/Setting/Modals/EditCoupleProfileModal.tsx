import { useEffect, useRef, useState } from 'react';
import * as S from './style';
import Image from '@/components/Image';
import { Svg } from '@/components/Svg';
import { useTheme } from 'styled-components';
import { CoupleProfileInfoType, EditProfileInputOnFocusType } from './type';
import { changeInfo } from '@/utils';
import EditProfileImageOverlayComponent from './EditProfileImageOverlayComponent';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import { toast } from 'react-toastify';
import { ConnectionQueries } from '@/apis/connection';

export default function EditCoupleProfileModal({
  setIsShow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const coupleNameRef = useRef<HTMLInputElement>(null);
  const coupleDescriptionRef = useRef<HTMLTextAreaElement>(null);
  const [coupleInfo, setCoupleInfo] = useState<CoupleProfileInfoType>({
    name: '',
    description: '',
    bgImage: null,
    blobImage: '',
    startDate: '',
  });
  const [isEditing, setIsEditing] = useState({
    name: true,
    description: true,
  });

  const getMyInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(getMyInfo?.id);

  const calculateDurationRelationship = () => {
    const startDate = new Date(coupleInfo.startDate!);
    const now = new Date();
    now.setHours(now.getHours() + 9);
    const diff = now.getTime() - startDate.getTime();
    const days = diff / (1000 * 60 * 60 * 24);
    //0일 부터 시작하므로 +1
    return Math.floor(days + 1);
  };

  const onChangeProfileDescription = changeInfo.text<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });
  const onChangeProfileName = changeInfo.text<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });

  const onChangeCoupleBgImage = changeInfo.image<CoupleProfileInfoType>({
    setState: setCoupleInfo,
  });

  const onChangeStartDate: React.ChangeEventHandler<HTMLInputElement> = e => {
    const date = e.target.value;
    setCoupleInfo(prev => ({ ...prev, startDate: date }));
  };

  const onEditProfileTextInfo = (ref: EditProfileInputOnFocusType) => {
    if (ref.current) {
      ref.current.disabled = false;
      setIsEditing(prev => {
        return {
          ...prev,
          [`${ref.current?.id}`]: false,
        };
      });
      ref.current.focus();
    }
  };

  const editBlogProfileMutate = BlogQueries.EditCoupleProfileMutate();

  const onSubmitEditProfile: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    //api로 담아보낼 from데이터
    const formData = new FormData();
    if (coupleInfo.bgImage !== null) {
      formData.append('backgroundImageFile', coupleInfo.bgImage);
    }
    formData.append('name', coupleInfo.name!);
    formData.append('description', coupleInfo.description!);
    formData.append('dDayStartDate', coupleInfo.startDate!);
    editBlogProfileMutate.mutate(
      { formData, blogId: getBlogInfo?.id },
      {
        onSuccess: () => {
          toast.success('프로필이 수정되었습니다.');
          setIsShow(false);
        },
      }
    );
  };

  const deleteConnectionMutate = ConnectionQueries.DeleteConnectionMutate();

  const onClickDisConnectedCouple = () => {
    if (
      confirm(
        '정말로 연결을 해제하시겠습니까? 연결이 해제되면 함께 쌓은 추억이 삭제됩니다.'
      )
    ) {
      deleteConnectionMutate.mutate(
        { id: getBlogInfo?.connectionId },
        {
          onSuccess: () => {
            toast.success('연결이 해제되었습니다.');
            setIsShow(false);
            window.location.href = '/blog';
          },
        }
      );
    }
  };

  useEffect(() => {
    setCoupleInfo(prev => {
      return {
        ...prev,
        name: getBlogInfo?.name,
        description: getBlogInfo?.description,
        blobImage: getBlogInfo?.backgroundImageUrl,
        startDate: getBlogInfo?.dDayStartDate,
      };
    });
  }, [getBlogInfo]);

  if (!getBlogInfo) {
    return <S.ModalWrapper>블로그 연결을 진행해 주세요.</S.ModalWrapper>;
  }

  return (
    <S.ModalWrapper $width="650px">
      <S.EditCoupleProfileTitleNameWrapper>
        <input
          id="name"
          type="text"
          value={coupleInfo.name}
          disabled={isEditing.name}
          ref={coupleNameRef}
          onChange={onChangeProfileName}
        />
        <label
          htmlFor="name"
          onClick={() => onEditProfileTextInfo(coupleNameRef)}
        >
          <Svg.WriteIcon size={24} />
        </label>
      </S.EditCoupleProfileTitleNameWrapper>
      <form onSubmit={onSubmitEditProfile}>
        <S.CoupleProfileWrapper>
          <EditProfileImageOverlayComponent
            htmlForId="bgImage"
            onChange={onChangeCoupleBgImage}
          >
            {coupleInfo.blobImage ? (
              <Image
                src={coupleInfo.blobImage}
                alt="bgImage"
                width="100%"
                height="220px"
                borderRadius="18px"
              />
            ) : (
              <S.NoneBgImageBox>
                <span>커플 프로필 이미지를 등록해주세요</span>
              </S.NoneBgImageBox>
            )}
          </EditProfileImageOverlayComponent>
        </S.CoupleProfileWrapper>
        <S.CoupleProfileInfoWrapper>
          <S.CoupleInfoGrid>
            <Image
              src={getBlogInfo?.members[0].profileImageUrl as string}
              alt="profile"
              width="80px"
              height="80px"
              borderRadius="50%"
            />
            <S.DuringRelationshipDateWrapper>
              <Svg.LikeIcon color={theme.accent.red} />
              <label htmlFor="startDate">
                + {calculateDurationRelationship()}
              </label>
              <input
                id="startDate"
                type="date"
                value={coupleInfo.startDate}
                onChange={onChangeStartDate}
              />
            </S.DuringRelationshipDateWrapper>
            <Image
              src={getBlogInfo?.members[1].profileImageUrl as string}
              alt="profile"
              width="80px"
              height="80px"
              borderRadius="50%"
            />
            <span>{getBlogInfo?.members[0].nickname}</span>
            <span />
            <span>{getBlogInfo?.members[1].nickname}</span>
            <S.EditProfileDescription>
              <textarea
                value={coupleInfo.description}
                id="description"
                disabled={isEditing.description}
                onChange={onChangeProfileDescription}
                placeholder="본인 커플을 표현할 수 있는 대표 문장을 만들어 주세요."
                ref={coupleDescriptionRef}
              />
              <label
                onClick={() => onEditProfileTextInfo(coupleDescriptionRef)}
              >
                <Svg.WriteIcon size={16} />
              </label>
            </S.EditProfileDescription>
          </S.CoupleInfoGrid>
        </S.CoupleProfileInfoWrapper>
        <S.SubmitEditProfileButtonWrapper>
          <button type="submit">변경내용 저장</button>
        </S.SubmitEditProfileButtonWrapper>
      </form>
      <S.DisConnectedCoupleButtonWrapper>
        <S.DisConnectedCoupleButton onClick={onClickDisConnectedCouple}>
          <Svg.DisConnectedCoupleIcon />
          커플 연결 해제
        </S.DisConnectedCoupleButton>
      </S.DisConnectedCoupleButtonWrapper>
    </S.ModalWrapper>
  );
}

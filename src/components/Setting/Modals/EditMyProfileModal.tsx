import Image from '@/components/Image';
import * as S from './style';
import { Svg } from '@/components/Svg';
import { useEffect, useState } from 'react';
import { CurrentProfileInfoType } from './type';
import { changeInfo } from '@/utils';
import { UserQueries } from '@/apis/user';
import { toast } from 'react-toastify';

export default function EditMyProfileModal({
  setIsShow,
}: {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currentProfileInfo, setCurrentProfileInfo] =
    useState<CurrentProfileInfoType>({
      editName: '이재진',
      editImage: {} as File,
      blobImage: 'images/introImage.jpg',
    });

  const curMyInfo = UserQueries.GetMyInfoQuery();

  useEffect(() => {
    setCurrentProfileInfo(prev => {
      return {
        ...prev,
        editName: curMyInfo?.nickname as string,
        blobImage: curMyInfo?.profileImageUrl as string,
      };
    });
  }, [curMyInfo]);

  const profileImageToUploadFile = changeInfo.image<CurrentProfileInfoType>({
    setState: setCurrentProfileInfo,
  });

  const onChangeName = changeInfo.text<CurrentProfileInfoType>({
    setState: setCurrentProfileInfo,
  });

  const editMyInfoMutate = UserQueries.EditMyInfoMutation();

  const onEditProfile: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    //api로 담아보낼 from데이터
    const formData = new FormData();
    formData.append('profileImageFile', currentProfileInfo.editImage);
    formData.append('nickname', currentProfileInfo.editName);
    editMyInfoMutate.mutate(
      { formData },
      {
        onSuccess: () => {
          toast.success('프로필이 수정되었습니다.');
          setIsShow(false);
        },
      }
    );
  };

  return (
    <>
      <S.ModalWrapper>
        <S.ModalHeader>
          <h2>프로필 수정</h2>
        </S.ModalHeader>
        <form onSubmit={onEditProfile}>
          <S.EditProfileWrapper>
            <S.EditProfileImageOverlay>
              <Image
                src={currentProfileInfo.blobImage}
                alt="profile"
                width="80px"
                height="80px"
                borderRadius="50%"
              />
              <label htmlFor="editImage">
                <Svg.CameraIcon />
              </label>
              <input
                type="file"
                accept="image/*"
                id="editImage"
                onChange={profileImageToUploadFile}
                hidden
              />
            </S.EditProfileImageOverlay>
            <S.EditInputContainer>
              <label>이름</label>
              <input
                type="text"
                value={currentProfileInfo.editName}
                id="editName"
                placeholder="이름을 입력하세요."
                onChange={onChangeName}
              />
              <button>저장하기</button>
            </S.EditInputContainer>
          </S.EditProfileWrapper>
        </form>
      </S.ModalWrapper>
    </>
  );
}

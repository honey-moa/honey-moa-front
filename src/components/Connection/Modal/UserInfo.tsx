import * as S from './style';
import { Svg } from '@/components/Svg';
import { UserInfoProps } from './type';
import { ConnectionQueries } from '@/apis/connection';
import { toast } from 'react-toastify';
import { PostConnectionErrorHandler } from '@/apis/connection/error';
import Image from '@/components/Image';
import { useTheme } from 'styled-components';

export default function UserInfo({ userInfo }: UserInfoProps) {
  const theme = useTheme();
  const mutationConnection = ConnectionQueries.PostConnectionQuery();
  function connectionHandler(id: string) {
    mutationConnection.mutate(id, {
      onSuccess: () => {
        toast.success('요청이 완료됐습니다.');
      },
      onError: error => {
        toast.error(PostConnectionErrorHandler(error));
      },
    });
  }

  return (
    <S.EachUserInfoWrapper key={userInfo.id}>
      <S.InfoBox>
        <S.ProfileImgWrapper>
          <Image
            src={userInfo.profileImageUrl}
            width="40px"
            height="40px"
            borderRadius="50%"
            alt="프로필 이미지"
          />
        </S.ProfileImgWrapper>
        <S.NameContainer>
          <S.NickName>{userInfo.nickname}</S.NickName>
          <S.Email>{userInfo.email}</S.Email>
          <S.EmailVerifiedWrapper $isVerified={userInfo.isEmailVerified}>
            {userInfo.isEmailVerified ? (
              <span>인증됨</span>
            ) : (
              <span>인증안됨</span>
            )}
          </S.EmailVerifiedWrapper>
        </S.NameContainer>
      </S.InfoBox>
      <S.ConnectButton>
        <Svg.ConnectedIcon size={15} color={theme.text.primary} />
        <p
          onClick={() => {
            connectionHandler(userInfo.id);
          }}
        >
          Connect
        </p>
      </S.ConnectButton>
    </S.EachUserInfoWrapper>
  );
}

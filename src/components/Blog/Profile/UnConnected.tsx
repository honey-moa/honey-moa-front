import * as S from './style';
import Connection from '@/components/Connection/Connection';
import { GetMyInfoQuery } from '@/apis/user/queries';
import Image from '@/components/Image';

export default function UnConnectedProfile() {
  const myInfo = GetMyInfoQuery();

  return (
    <>
      <S.UnConnectedProfileBgDiv>
        <S.UnConnectedInfoWrapper>
          <Image
            src={myInfo?.profileImageUrl as string}
            alt="프로필사진"
            width="65px"
            height="65px"
            borderRadius="50%"
          />
          <S.CoupleShortIntroduction>
            <h4>
              {myInfo ? myInfo.nickname : <>설정에서 이름을 설정해 주세요.</>}
            </h4>
            <p>
              소중한 추억을 함께 기록하기 위해 파트너와 연결해주세요.
              <br /> 연결 후에는 다이어리 작성, 사진 공유 등 더 많은 기능을
              이용할 수 있어요.
            </p>
            <Connection />
          </S.CoupleShortIntroduction>
        </S.UnConnectedInfoWrapper>
      </S.UnConnectedProfileBgDiv>
    </>
  );
}

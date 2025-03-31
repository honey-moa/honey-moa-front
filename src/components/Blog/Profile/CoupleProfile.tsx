import Image from '@/components/Image';
import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';
import { Profile } from '@/components/Layouts';

export default function CoupleProfile() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  return (
    <>
      <S.ProfileWrapper>
        {getBlogInfo?.backgroundImageUrl && (
          <Image
            src={getBlogInfo?.backgroundImageUrl}
            alt="커플 배경 이미지"
            width="100%"
            height="100%"
            borderRadius="16px"
          />
        )}
        <S.CoupleInfoWrapper>
          <Profile.TogetherImage members={getBlogInfo?.members} />
          <S.CoupleShortIntroduction>
            <h2>{getBlogInfo?.name}</h2>
            <p>{getBlogInfo?.description}</p>
          </S.CoupleShortIntroduction>
        </S.CoupleInfoWrapper>
      </S.ProfileWrapper>
    </>
  );
}

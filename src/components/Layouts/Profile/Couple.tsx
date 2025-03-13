import Image from '@/components/Image';
import * as S from './style';
import { CoupleProfileProps } from './type';
import { BlogQueries } from '@/apis/blog';
import TogetherImage from './TogetherImage';

export default function CoupleProfile({ myId }: CoupleProfileProps) {
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myId!);

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
          <TogetherImage members={getBlogInfo?.members} />
          <S.CoupleShortIntroduction>
            <h2>{getBlogInfo?.name}</h2>
            <p>{getBlogInfo?.description}</p>
          </S.CoupleShortIntroduction>
        </S.CoupleInfoWrapper>
      </S.ProfileWrapper>
    </>
  );
}

import Image from '@/components/Image';
import * as S from './style';
import { CoupleProfileProps } from './type';
import { BlogQueries } from '@/apis/blog';
import TogetherImage from './TogetherImage';
import { useMemo } from 'react';

export default function CoupleProfile({ myId }: CoupleProfileProps) {
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myId!);

  const coupleName = useMemo(() => {
    return getBlogInfo?.members.map(member => member.nickname).join(' & ');
  }, [getBlogInfo]);

  return (
    <>
      <S.ProfileWrapper>
        <Image
          src={'/images/introImage.jpg'}
          alt="커플 배경 이미지"
          width="100%"
          height="100%"
          borderRadius="16px"
        />
        <S.CoupleInfoWrapper>
          <TogetherImage members={getBlogInfo?.members} />
          <S.CoupleShortIntroduction>
            <h2>{coupleName}</h2>
            <p>
              "우리 커플을 소개하는 글을 적는 부분입니다. <br />
              과연 어디까지 쓸 수 있을까요? 제한된 글자 수를 지정해야 할 것
              같습니다.
              <br /> 그게 아니면 박스를 벗어나 버릴테니깐요"
            </p>
          </S.CoupleShortIntroduction>
        </S.CoupleInfoWrapper>
      </S.ProfileWrapper>
    </>
  );
}

import Image from '@/components/Image';
import * as S from './style';
import { TogetherImageProps } from './type';

export default function TogetherImage({ members }: TogetherImageProps) {
  return (
    <S.CoupleProfileWrapper>
      <S.EachImageContainer>
        {members?.map(member => {
          return (
            <Image
              key={member.id}
              src={member.profileImageUrl}
              alt="profile"
              width="64px"
              height="64px"
              borderRadius="50%"
            />
          );
        })}
      </S.EachImageContainer>
    </S.CoupleProfileWrapper>
  );
}

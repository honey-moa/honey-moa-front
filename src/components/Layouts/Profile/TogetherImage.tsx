import Image from '@/components/Image';
import * as S from './style';
import { TogetherImageProps } from './type';
import { Svg } from '@/components/Svg';

export default function TogetherImage({ members }: TogetherImageProps) {
  return (
    <S.CoupleProfileWrapper>
      <S.EachImageContainer>
        {members?.map(member => {
          return (
            <div key={member.id}>
              {member.profileImageUrl ? (
                <Image
                  src={member.profileImageUrl}
                  alt={`${member.nickname}의 프로필 이미지`}
                  width="64px"
                  height="64px"
                  borderRadius="50%"
                />
              ) : (
                <div>
                  <Svg.DefaultProfile />
                </div>
              )}
            </div>
          );
        })}
      </S.EachImageContainer>
    </S.CoupleProfileWrapper>
  );
}

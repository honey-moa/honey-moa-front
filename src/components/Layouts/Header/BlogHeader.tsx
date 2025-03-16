import { Svg } from '../../Svg';
import * as S from './style';
import { BlogHeaderProps } from './type';
import Image from '@/components/Image';
import CustomLink from '@/components/common/CustomLink';

export default function Blog({ blogName, blogId, visible }: BlogHeaderProps) {
  return (
    <S.HeaderWrapper $visible={visible}>
      <S.TitleContainer>
        <CustomLink to={`/blog/${blogId}`} scrollTop={true}>
          <Image
            src={'/images/siteLogo.jpg'}
            width="65px"
            height="65px"
            borderRadius="50%"
          />
        </CustomLink>
        <h1>{blogName}</h1>
      </S.TitleContainer>
      <S.SettingContainer>
        <CustomLink to="/public/posts" scrollTop={true}>
          <button>공개글 보기</button>
        </CustomLink>
        <CustomLink to="/setting" scrollTop={true}>
          <button>
            <Svg.SettingIcon size={36} />
          </button>
        </CustomLink>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}

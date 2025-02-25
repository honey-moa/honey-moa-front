import { Link } from 'react-router-dom';
import { Svg } from '../../Svg';
import * as S from './style';
import { PublicBlogHeaderProps } from './type';
import Image from '@/components/Image';

export default function PublicBlog({ blogId }: PublicBlogHeaderProps) {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <Image
          src={'/images/introImage.jpg'}
          width="65px"
          height="65px"
          borderRadius="50%"
        />
        <h1>공개글</h1>
      </S.TitleContainer>
      <S.SettingContainer>
        <Link to={`/blog/${blogId}`}>
          <button>내 블로그 돌아가기</button>
        </Link>
        <Link to="/setting">
          <button>
            <Svg.SettingIcon size={36} />
          </button>
        </Link>
      </S.SettingContainer>
    </S.HeaderWrapper>
  );
}

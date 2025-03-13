import { Link } from 'react-router-dom';
import { Svg } from '../../Svg';
import * as S from './style';
import { BlogHeaderProps } from './type';
import Image from '@/components/Image';

export default function Blog({ blogName, blogId }: BlogHeaderProps) {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <Link to={`/blog/${blogId}`}>
          <Image
            src={'/images/siteLogo.jpg'}
            width="65px"
            height="65px"
            borderRadius="50%"
          />
        </Link>
        <h1>{blogName}</h1>
      </S.TitleContainer>
      <S.SettingContainer>
        <Link to="/public/posts">
          <button>공개글 보기</button>
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

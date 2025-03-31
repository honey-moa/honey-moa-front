import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';
import { BlogHeaderProps } from './type';
import Image from '@/components/Image';
import CustomLink from '@/components/common/CustomLink';
import { Loading } from '@/components';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';

export default function Blog({ visible }: BlogHeaderProps) {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);
  const theme = useTheme();

  return (
    <S.BlogHeaderWrapper $visible={visible}>
      <S.TitleContainer>
        <CustomLink
          to={getBlogInfo ? `/blog/${getBlogInfo.id}` : '#'}
          scrollTop={true}
        >
          <Image
            src={'/images/siteLogo.jpg'}
            width="65px"
            height="65px"
            borderRadius="50%"
          />
        </CustomLink>
        {!getBlogInfo ? (
          <Loading.SkeletonUI width="150px" height="24px" />
        ) : (
          <h1>{getBlogInfo.name}</h1>
        )}
      </S.TitleContainer>

      <S.SettingContainer>
        <CustomLink to="/public/posts" scrollTop={true}>
          <button>공개글 보기</button>
        </CustomLink>
        <CustomLink to="/setting" scrollTop={true}>
          <button>
            <Svg.SettingIcon size={36} color={theme.button.secondary.base} />
          </button>
        </CustomLink>
      </S.SettingContainer>
    </S.BlogHeaderWrapper>
  );
}

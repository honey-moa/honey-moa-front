import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';
import { PopUp } from '@/components';
import CustomLink from '@/components/common/CustomLink';
import { BlogQueries } from '@/apis/blog';
import { UserQueries } from '@/apis/user';

export default function AbleBlogSideNav() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);
  const theme = useTheme();

  return (
    <S.NavWrapper>
      <S.NavItemListContainer>
        {/* <li>
          <S.ItemButton>
            <Svg.LikeIcon size={36} color={theme.button.primary.base} />
          </S.ItemButton>
        </li> */}
        <li>
          <PopUp.Tooltip message="포스트 작성" direction="right">
            <CustomLink
              to={getBlogInfo ? `/blog/${getBlogInfo.id}/post/create` : '#'}
            >
              <S.ItemButton disabled={!getBlogInfo}>
                <Svg.WriteIcon size={36} color={theme.text.primary} />
              </S.ItemButton>
            </CustomLink>
          </PopUp.Tooltip>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}

// import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';
import { Link } from 'react-router-dom';
import { AbleBLogSideNavProps } from './type';
import { PopUp } from '@/components';

export default function AbleBlogSideNav({ blogId }: AbleBLogSideNavProps) {
  // const theme = useTheme();
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
            <Link to={`/blog/${blogId}/post/create`}>
              <S.ItemButton>
                <Svg.WriteIcon size={36} />
              </S.ItemButton>
            </Link>
          </PopUp.Tooltip>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}

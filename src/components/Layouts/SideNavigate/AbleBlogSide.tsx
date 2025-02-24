import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';
import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

export default function AbleBlogSideNav() {
  const theme = useTheme();
  const { pathname } = useLocation();

  const blogId = useMemo(() => {
    const pathArr = pathname.split('/');
    return pathArr[pathArr.length - 1];
  }, [pathname]);

  return (
    <S.NavWrapper>
      <S.NavItemListContainer>
        <li>
          <S.ItemButton>
            <Svg.LikeIcon size={36} color={theme.button.primary.base} />
          </S.ItemButton>
        </li>
        <li>
          <Link to={`/blog/${blogId}/post/create`}>
            <S.ItemButton>
              <Svg.WriteIcon size={36} />
            </S.ItemButton>
          </Link>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}

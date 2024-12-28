import { useTheme } from 'styled-components';
import { Svg } from '../../Svg';
import * as S from './style';

export default function SideNavigate() {
  const theme = useTheme();
  return (
    <S.NavWrapper>
      <S.NavItemListContainer>
        <li>
          <S.ItemButton>
            <Svg.LikeIcon size={36} color={theme.btn_02} />
          </S.ItemButton>
        </li>
        <li>
          <S.ItemButton>
            <Svg.WriteIcon size={36} />
          </S.ItemButton>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}

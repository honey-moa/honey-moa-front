import { Svg } from '../../Svg';
import * as S from './style';
import { Link } from 'react-router-dom';

export default function UnConnectedSideNav() {
  return (
    <S.NavWrapper>
      <S.NavItemListContainer>
        {/* <li>
          <S.ItemButtonDisabled disabled>
            <Svg.LikeIcon size={36} color="" />
          </S.ItemButtonDisabled>
        </li> */}
        <li>
          <Link to="/post">
            <S.ItemButtonDisabled disabled>
              <Svg.WriteIcon size={36} />
            </S.ItemButtonDisabled>
          </Link>
        </li>
      </S.NavItemListContainer>
    </S.NavWrapper>
  );
}

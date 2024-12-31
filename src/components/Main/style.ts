import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  //메인 컨텐츠
  & > :nth-child(2) {
    flex: 1;
  }
`;

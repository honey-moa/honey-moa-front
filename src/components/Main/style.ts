import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
  //사이드 바
  & > :nth-child(1) {
    flex: 1;
  }
  //메인 컨텐츠
  & > :nth-child(2) {
    flex: 12;
  }
`;

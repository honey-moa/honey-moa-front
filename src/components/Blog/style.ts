import styled from 'styled-components';

export const ContentsWrapper = styled.div`
  display: flex;
`;

export const BlogWrapper = styled.div`
  flex-grow: 1;
  border-left: 1px solid ${({ theme }) => theme.border.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
`;

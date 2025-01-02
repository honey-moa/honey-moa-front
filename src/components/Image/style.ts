import styled from 'styled-components';
import { PlaceholderProps, StyledImageProps } from './type';

export const StyledImage = styled.img<StyledImageProps>`
  display: block;
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  object-fit: ${({ $fit }) => $fit || 'cover'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
`;

export const Placeholder = styled.div<PlaceholderProps>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

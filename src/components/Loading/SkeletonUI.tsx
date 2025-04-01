import * as S from './style';

interface SkeletonUIProps {
  width: string;
  height: string;
}

export default function SkeletonUI({
  width = '50px',
  height = '50px',
}: SkeletonUIProps) {
  return <S.SkeletonUI $width={width} $height={height}></S.SkeletonUI>;
}

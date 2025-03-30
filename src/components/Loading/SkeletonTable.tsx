import SkeletonUI from './SkeletonUI';
import * as S from './style';

interface SkeletonTableProps {
  columns?: number;
  rows?: number;
  width?: string;
  height?: string;
}

export default function SkeletonTable({
  height,
  width,
  columns = 3,
  rows = 2,
}: SkeletonTableProps) {
  return (
    <S.SkeletonTableWrapper $columns={columns} $rows={rows}>
      {Array.from({ length: columns }, (_, index) => (
        <div key={index} className="flex items-center gap-4">
          <SkeletonUI width={width || '100%'} height={height || '30px'} />
        </div>
      ))}
    </S.SkeletonTableWrapper>
  );
}

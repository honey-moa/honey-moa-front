import * as S from './style';
import Story from './Story';

export default function Preview() {
  return (
    <S.PreviewWrapper>
      <S.ListHeader>이미 많은 분들이 함께하고 있습니다</S.ListHeader>
      <S.PreviewGrid>
        <Story />
        <Story />
        <Story />
      </S.PreviewGrid>
    </S.PreviewWrapper>
  );
}

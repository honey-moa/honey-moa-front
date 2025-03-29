import * as S from './style';
import { BlogQueries } from '@/apis/blog';
import Image from '@/components/Image';

export default function Preview() {
  const publicData = BlogQueries.GetPublicBlogPaginationQuery({
    limit: 3,
  });

  const publicBlogFlattenedContents = publicData?.data?.pages.flatMap(
    page => page.contents
  );

  return (
    <S.PreviewWrapper>
      <S.ListHeader>이미 많은 분들이 함께하고 있습니다</S.ListHeader>
      <S.PreviewGrid>
        {publicBlogFlattenedContents?.map(blog => {
          return (
            <S.PreviewDiv key={blog.id}>
              <S.PreviewContent>
                <div>
                  <Image src={blog.thumbnailImageUrl} />
                </div>
                <div>
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                </div>
              </S.PreviewContent>
            </S.PreviewDiv>
          );
        })}
      </S.PreviewGrid>
    </S.PreviewWrapper>
  );
}

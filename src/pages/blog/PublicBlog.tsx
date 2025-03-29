import * as S from './style';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import useScrollPosition from '@/hook/useScrollPosition';
import { Suspense } from 'react';
import { Header, SideNavigate } from '@/components/Layouts';
import PublicBlogList from '@/components/Blog/BlogList/PublicBlogList';

export default function PublicBlog() {
  const myInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(myInfo?.id);

  const { visible } = useScrollPosition();

  return (
    <>
      <Header.BlogHeader
        blogName={getBlogInfo?.name}
        blogId={getBlogInfo?.id}
        visible={visible}
      />
      <S.Divider />

      <S.ContentsWrapper>
        <SideNavigate.AbleBlogSideNav blogId={getBlogInfo?.id} />
        <S.BlogWrapper>
          <Suspense fallback={<div>Loading...</div>}>
            <PublicBlogList />
          </Suspense>
        </S.BlogWrapper>
      </S.ContentsWrapper>
    </>
  );
}

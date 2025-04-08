import * as S from './style';
import { Navigate } from 'react-router-dom';
import CreateBlogModal from './CreateBlogModal';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import { ConnectionQueries } from '@/apis/connection';
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal';
import UnConnectedList from '@/components/Blog/UnConnectBlog/UnConnectedList';

export default function UnConnectBlog() {
  const [isCreateBlogModal, setIsCreateBlogModal] = useState(false);
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });
  const getMyInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(getMyInfo?.id);

  useEffect(() => {
    if (connectionInfo && connectionInfo?.contents.length > 0) {
      setIsCreateBlogModal(true);
    }
  }, [connectionInfo?.contents]);

  if (getBlogInfo) {
    return <Navigate to={`/blog/${getBlogInfo.id}`} />;
  }

  return (
    <S.ContentsWrapper>
      {isCreateBlogModal && (
        <Modal
          shouldCloseToClickOutside={false}
          blur={true}
          isShow={isCreateBlogModal}
          setIsShow={setIsCreateBlogModal}
        >
          <CreateBlogModal />
        </Modal>
      )}
      <UnConnectedList />
    </S.ContentsWrapper>
  );
}

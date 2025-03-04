import { Header, Profile, SideNavigate } from '../Layouts';
import * as S from './style';
import { Contents } from '.';
import { Navigate } from 'react-router-dom';
import Modal from '../Modal';
import CreateBlogModal from './CreateBlogModal';
import { UserQueries } from '@/apis/user';
import { BlogQueries } from '@/apis/blog';
import { ConnectionQueries } from '@/apis/connection';
import useLocalStorage from '@/hook/useLocalStorage';
import { useEffect, useState } from 'react';

export default function Main() {
  const [isCreateBlogModal, setIsCreateBlogModal] = useState(false);
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });
  const { value: token } = useLocalStorage('accessToken');
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

  if (!token || token === '' || token === 'undefined') {
    return <Navigate to="/root" />;
  }

  return (
    <>
      <Header.UnConnectedHeader />
      <S.ContentsWrapper>
        <SideNavigate.UnConnectedSideNav />
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

        <div>
          <Profile.UnConnectedProfile />
          <Contents.UnConnectedList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}

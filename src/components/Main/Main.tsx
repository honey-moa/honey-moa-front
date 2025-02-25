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

export default function Main() {
  const connectionInfo = ConnectionQueries.GetConnectionListPaginationQuery({
    status: 'ACCEPTED',
    type: 'requested',
  });
  const { value: token } = useLocalStorage('accessToken');
  const getMyInfo = UserQueries.GetMyInfoQuery();
  const getBlogInfo = BlogQueries.GetSingleBlogQuery(getMyInfo?.id as string);

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
        <Modal
          shouldCloseToClickOutside={false}
          blur={true}
          isOpen={connectionInfo?.contents.length !== 0 && !getBlogInfo}
        >
          <CreateBlogModal />
        </Modal>

        <div>
          <Profile.UnConnectedProfile />
          <Contents.UnConnectedList />
        </div>
      </S.ContentsWrapper>
    </>
  );
}

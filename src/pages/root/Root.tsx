import { Header } from '@/components/Layouts';
import Landing from '@/components/Root/Landing';
import { useTitle } from '@/hook/useTitle';

export default function Root() {
  useTitle('꿀모아 | 시작페이지');

  return (
    <>
      <Header.RootHeader />
      <Landing />
    </>
  );
}

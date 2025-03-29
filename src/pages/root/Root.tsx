import { Header } from '@/components/Layouts';
import Landing from '@/components/Root/Landing';

export default function Root() {
  return (
    <>
      <Header.RootHeader />
      <Landing />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Preview />
      </Suspense> */}
    </>
  );
}

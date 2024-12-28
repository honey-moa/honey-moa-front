import Landing from './Landing';
import Preview from './Preview';
import { Header } from '../Layouts';

export default function Root() {
  return (
    <>
      <Header.RootHeader />
      <Landing />
      <Preview />
    </>
  );
}

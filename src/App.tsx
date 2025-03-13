import { Suspense } from 'react';
import AppProvider from './provider/AppProvider';
import ThemeColorProvider from './provider/ThemeColorProvider';
import ValidationRoute from './routes/ValidationRoute';
import { Loading } from './components';

function App() {
  return (
    <>
      <ThemeColorProvider>
        <AppProvider>
          <Suspense fallback={<Loading.Spinner />}>
            <ValidationRoute />
          </Suspense>
        </AppProvider>
      </ThemeColorProvider>
    </>
  );
}

export default App;

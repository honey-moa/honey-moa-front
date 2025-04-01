import AppProvider from './provider/AppProvider';
import ThemeColorProvider from './provider/ThemeColorProvider';
import ValidationRoute from './routes/ValidationRoute';

function App() {
  return (
    <>
      <ThemeColorProvider>
        <AppProvider>
          <ValidationRoute />
        </AppProvider>
      </ThemeColorProvider>
    </>
  );
}

export default App;

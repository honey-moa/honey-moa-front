import { useState } from 'react';
import Modal from './components/Modal';
import AppProvider from './provider/AppProvider';
import { Route } from 'react-router-dom';
import ThemeColorProvider from './provider/ThemeColorProvider';
import Root from './components/Root';

function App() {
  const [totalOpen, setTotalOpen] = useState<boolean>(false);

  return (
    <>
      <ThemeColorProvider>
        <AppProvider>
          <Route path="/root" element={<Root />}></Route>
        </AppProvider>
      </ThemeColorProvider>
      <button onClick={() => setTotalOpen(!totalOpen)}>모달테스트</button>
      <Modal isOpen={totalOpen}>
        <div style={{ border: '1px solid red', backgroundColor: 'white' }}>
          <h1>헤더</h1>
          <div>
            <h1>바디</h1>
            <p>des</p>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default App;

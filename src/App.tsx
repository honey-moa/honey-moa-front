import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal isOpen={isOpen}>
        <div style={{ border: '1px solid red' }}>
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

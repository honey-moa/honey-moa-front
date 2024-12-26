import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [totalOpen, setTotalOpen] = useState<boolean>(false);
  const [boxOpen, setBoxOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setTotalOpen(!totalOpen)}>total모달</button>
      <Modal isOpen={totalOpen}>
        <div style={{ border: '1px solid red' }}>
          <h1>헤더</h1>
          <div>
            <h1>바디</h1>
            <p>des</p>
          </div>
        </div>
      </Modal>

      <button onClick={() => setBoxOpen(!boxOpen)}>box모달</button>
      <Modal isOpen={boxOpen} modalType="box">
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

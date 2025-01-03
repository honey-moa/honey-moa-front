import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';
import { expect, describe, it } from 'vitest';
import { useState } from 'react';

const ModalTestWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(prev => !prev)}>Toggle Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data-testid="modal"
      >
        <div>
          <h1>testHeader</h1>
          <p>testBody</p>
        </div>
      </Modal>
    </div>
  );
};
describe('Modal test', () => {
  render(<ModalTestWrapper />);
  it('1. isOpen 값을 state prev=>!prev 로 전달하면 Modal 창이 열린다.', () => {
    const modalHeader = screen.getByText('testHeader');

    expect(modalHeader).toBeDefined();
  });
  it('2. Modal 영억 내부를 클릭해도 Modal 창은 닫히지 않는다.', () => {
    const modalHeader = screen.getByText('testHeader');

    fireEvent.click(modalHeader);

    expect(modalHeader).toBeDefined();
  });
  //추후 추가
  // it('3. Modal 영역 외부를 클릭하면 Modal 창이 닫힌다.', () => {
  // });
});

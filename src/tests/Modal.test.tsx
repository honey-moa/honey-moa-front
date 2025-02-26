import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';
import { expect, describe, it } from 'vitest';
import { useState } from 'react';

const ModalTestWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button data-testid="toggle-button" onClick={() => setIsOpen(true)}>
        Toggle Modal
      </button>
      <Modal isShow={isOpen} setIsShow={setIsOpen} data-testid="modal">
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
  it('1. 버튼을 누르면 모달이 열린다.', () => {
    const toggleButton = screen.getByText('Toggle Modal');
    fireEvent.click(toggleButton);

    const testHeader = screen.getByText('testHeader');
    expect(testHeader).toBeDefined();
  });
});

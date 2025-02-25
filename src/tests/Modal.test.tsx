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
  it('1. 버튼을 누르면 모달이 열린다.', () => {
    render(<ModalTestWrapper />);
    const toggleButton = screen.getByTestId('toggle-button');
    fireEvent.click(toggleButton);

    const testHeader = screen.getByText('testHeader');
    expect(testHeader).toBe('testHeader');
  });
});

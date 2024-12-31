import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal';
import { expect, describe, beforeAll, it } from 'vitest';

beforeAll(() => {
  render(
    <div>
      <button onClick={() => console.log(1)}>Click</button>
      <Modal isOpen={true} data-testid="outside">
        <div>
          <h1>testHeader</h1>
          <div>
            <p>testBody</p>
          </div>
        </div>
      </Modal>
    </div>
  );
});
describe('Modal test', () => {
  it('1. isOpen 값을 true 로 전달하면 Modal 창이 열린다.', () => {
    const modalHeader = screen.getByText('testHeader');

    expect(modalHeader).toBeDefined();
  });
  it('2. Modal 영억 내부를 클릭해도 Modal 창은 닫히지 않는다.', () => {
    const modalHeader = screen.getByText('testHeader');

    fireEvent.click(modalHeader);

    expect(modalHeader).toBeDefined();
  });
  it.todo('3. Modal 영역 외부를 클릭하면 Modal 창이 닫힌다.');
});

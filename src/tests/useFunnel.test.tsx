import { fireEvent, render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import useFunnel from '../hook/useFunnel';

const TestComponent = () => {
  const { Funnel, setStep } = useFunnel<'Step1' | 'Step2'>('Step1');
  return (
    <Funnel>
      <Funnel.Step name="Step1">
        <div>
          <div>Step 1 Content</div>
          <button onClick={() => setStep('Step2')}>Next</button>
        </div>
      </Funnel.Step>
      <Funnel.Step name="Step2">
        <div>Step 2 Content</div>
      </Funnel.Step>
    </Funnel>
  );
};

describe('useFunnel Hook test', () => {
  render(<TestComponent />);
  it('1. 처음에 Step1이 보인다.', () => {
    // Step 1이 처음에 보이는지 확인
    expect(screen.getByText('Step 1 Content')).toBeDefined();
  });

  it('2. 다음 버튼을 누르면 Step1은 사라지고 Step2가 보인다.', () => {
    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    // Step1이 사라짐
    expect(screen.queryByText('Step 1 Content')).toBeNull();
    // Step2가 보임
    expect(screen.getByText('Step 2 Content')).toBeDefined();
  });
});

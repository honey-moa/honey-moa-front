import { BoxProps } from '../type';

export default function Box({ children, handleClose }: BoxProps) {
  return (
    <div>
      <button onClick={handleClose}>닫기</button>
      {children}
    </div>
  );
}

import { BoxProps } from '../type';

export default function Box({ children, handleClose }: BoxProps) {
  return (
    <div>
      <button onClick={handleClose} className="close-btn">
        닫기
      </button>
      {children}
    </div>
  );
}

import { TotalProps } from '../type';

export default function Total({ children, handleClose }: TotalProps) {
  return <div onClick={handleClose}>{children}</div>;
}

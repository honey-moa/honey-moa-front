import { HTMLAttributes } from 'react';

export type SvgProps = {
  size?: number | string;
} & HTMLAttributes<HTMLOrSVGElement>;

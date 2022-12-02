import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusLossCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <rect width={16} height={16} rx={8} fill='#EC3F3F' />
    <path d='M8 11 4 7h8l-4 4Z' fill='#fff' />
  </svg>
);
const ForwardRef = forwardRef(StatusLossCircleIcon);
export default ForwardRef;

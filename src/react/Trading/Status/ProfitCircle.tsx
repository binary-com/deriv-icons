import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusProfitCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={16} height={16} rx={8} fill='#4BB4B3' />
    <path d='M8 5 4 9h8L8 5Z' fill='#fff' />
  </svg>
);
const ForwardRef = forwardRef(StatusProfitCircleIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusWonIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M11.146 5.146a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L6.5 9.793l4.646-4.647Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(StatusWonIcon);
export default ForwardRef;

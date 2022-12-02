import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundBusdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <rect width={32} height={32} rx={16} fill='#F0B90B' />
    <path
      d='M23.522 13.5 26 16.03 16 26l-2.478-2.47 10-10.03Zm-3.76-3.75 2.477 2.53-10 9.97-2.478-2.47 10-10.03ZM8.477 13.5l2.477 2.53-2.477 2.47L6 16.03l2.478-2.53ZM16 6l2.478 2.53-6.24 6.22-2.477-2.47L16 6Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(RoundBusdIcon);
export default ForwardRef;

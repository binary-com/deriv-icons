import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartCrosshairActiveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g clipPath='url(#a)'>
      <path
        d='M8 0a1 1 0 0 1 1 1v.577A6.505 6.505 0 0 1 14.425 7H15a1 1 0 1 1 0 2h-.577a6.505 6.505 0 0 1-5.422 5.423L9 15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2h.576A6.505 6.505 0 0 1 7 1.576V1a1 1 0 0 1 1-1Zm0 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z'
        fill='#333'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChartCrosshairActiveIcon);
export default ForwardRef;

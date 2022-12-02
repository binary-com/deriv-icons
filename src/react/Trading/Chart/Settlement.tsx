import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartSettlementIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143ZM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
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
const ForwardRef = forwardRef(ChartSettlementIcon);
export default ForwardRef;

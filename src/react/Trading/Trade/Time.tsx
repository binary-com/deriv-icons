import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeTimeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1Zm0 2a.5.5 0 0 1 .5.5V8h3a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 8 3Z'
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
const ForwardRef = forwardRef(TradeTimeIcon);
export default ForwardRef;

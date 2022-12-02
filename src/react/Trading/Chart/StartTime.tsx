import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartStartTimeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.333a6.667 6.667 0 1 0 0 13.334A6.667 6.667 0 0 0 8 1.333Zm0 1.334a3.667 3.667 0 0 1 3.667 3.658c0 1.963-3.397 6.637-3.541 6.835l-.127.173-.125-.173c-.145-.196-3.54-4.876-3.54-6.835a3.667 3.667 0 0 1 3.665-3.658Zm-.001 1.589c-.919 0-1.663.743-1.663 1.66a1.664 1.664 0 0 0 3.327-.001c0-.917-.746-1.66-1.664-1.66Z'
        fill='#999'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChartStartTimeIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusFinishIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M1 0h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-5l-2 2-2-2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Z'
        fill='#4BB4B3'
      />
      <path
        d='M3.5 1a.5.5 0 0 1 .5.5V2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4v2.5a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5ZM13 7h-2v2h2V7ZM9 7H7v2h2V7Zm2-2H9v2h2V5ZM7 5H5v2h2V5Zm2-2H7v2h2V3Zm4 0h-2v2h2V3Z'
        fill='#fff'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(StatusFinishIcon);
export default ForwardRef;

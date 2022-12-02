import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartResetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143ZM5 7.5a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 4 2.001L8.5 10a.5.5 0 0 1-.09-.992L8.5 9h2a.5.5 0 0 1 .492.41L11 9.5v2a.5.5 0 0 1-.992.09L10 11.5v-.628A3.5 3.5 0 0 1 4.5 8a.5.5 0 0 1 .5-.5ZM5.5 4a.5.5 0 0 1 .492.41L6 4.5v.627A3.5 3.5 0 0 1 11.5 8a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4-2h1a.5.5 0 0 1 .09.992L7.5 7h-2a.5.5 0 0 1-.492-.41L5 6.5v-2a.5.5 0 0 1 .5-.5Z'
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
const ForwardRef = forwardRef(ChartResetIcon);
export default ForwardRef;

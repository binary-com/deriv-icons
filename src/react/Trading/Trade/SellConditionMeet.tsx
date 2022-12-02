import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeSellConditionMeetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M7.4 8a.6.6 0 0 1 .6.6v4.658a.6.6 0 0 1-1.024.424L6 12.707l-2.576 2.575a.6.6 0 0 1-.848 0L.717 13.424a.6.6 0 0 1 0-.849L3.293 10l-.976-.976A.6.6 0 0 1 2.741 8h4.66ZM7 9H3.707l1 1-3 3L3 14.293l3-3 1 1V9ZM13.424.717l1.859 1.858a.6.6 0 0 1 0 .849L12.707 6l.976.975A.6.6 0 0 1 13.259 8H8.6a.6.6 0 0 1-.6-.6V2.74a.6.6 0 0 1 1.024-.424l.976.975L12.576.717a.6.6 0 0 1 .848 0Zm-.424.99-3 3-1-1V7h3.293l-1-1 3-3L13 1.707Z'
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
const ForwardRef = forwardRef(TradeSellConditionMeetIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartBuyTimeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143ZM9.5 2.5a.5.5 0 0 1 .09.992L9.5 3.5h-1v1.028a4.5 4.5 0 1 1-1 0V3.5h-1a.5.5 0 0 1-.492-.41L6 3a.5.5 0 0 1 .41-.492L6.5 2.5h3ZM8 5.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.95 1.649a.5.5 0 0 1 .054.638l-.058.069L8.35 9.429a.5.5 0 0 1-.76-.643l.058-.069 1.594-1.573a.5.5 0 0 1 .707.005Z'
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
const ForwardRef = forwardRef(ChartBuyTimeIcon);
export default ForwardRef;

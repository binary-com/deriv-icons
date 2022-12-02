import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTurboIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g fill='#333' clipPath='url(#a)'>
      <path d='M0 14h1.667v1H0v-1ZM3.667 14h1.666v1H3.667v-1ZM7.333 14H9v1H7.333v-1ZM12 13h4v3h-4l-1.5-1.5L12 13Z' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 .5A.5.5 0 0 1 .5 0H9v1H.5A.5.5 0 0 1 0 .5Z'
      />
      <path d='M15.5 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V1.707L6.854 9.854a.5.5 0 0 1-.708 0L2.5 6.207 0 8.707V7.293l2.146-2.147a.5.5 0 0 1 .708 0L6.5 8.793 14.293 1H11V0h4.5Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CategoriesTurboIcon);
export default ForwardRef;

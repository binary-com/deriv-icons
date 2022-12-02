import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesMarketStocksIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g fillRule='evenodd' clipRule='evenodd' fill='#333' clipPath='url(#a)'>
      <path d='M15.5 1.5a1.5 1.5 0 0 1-1.993 1.417l-2.233 2.79a1.5 1.5 0 1 1-2.628.145l-2-1.998a1.494 1.494 0 0 1-1.293 0l-2 2a1.5 1.5 0 1 1-.707-.707l2-2a1.5 1.5 0 1 1 2.708 0l2 2a1.494 1.494 0 0 1 1.14-.064l2.232-2.79A1.5 1.5 0 1 1 15.5 1.5Zm-5 5a.498.498 0 0 1-.5.5.498.498 0 0 1-.5-.5.5.5 0 0 1 1 0Zm-8.114.318a.5.5 0 1 1-.77-.636.5.5 0 0 1 .77.636Zm11.2-5.598a.5.5 0 1 1 .828.558.5.5 0 0 1-.829-.558ZM6 3a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z' />
      <path d='M12.5 6.5a1.5 1.5 0 0 1 3 0v8a1.5 1.5 0 0 1-3 0v-8ZM14 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 1 0v-8A.5.5 0 0 0 14 6ZM.5 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0v-4ZM2 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4A.5.5 0 0 0 2 10ZM8.5 10.5a1.5 1.5 0 1 1 3 0v4a1.5 1.5 0 0 1-3 0v-4ZM10 10a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5ZM4.5 7.5a1.5 1.5 0 1 1 3 0v7a1.5 1.5 0 0 1-3 0v-7ZM6 7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 6 7Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CategoriesMarketStocksIcon);
export default ForwardRef;

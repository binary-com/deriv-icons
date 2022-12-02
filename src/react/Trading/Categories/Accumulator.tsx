import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesAccumulatorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      <path d='M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 .403.204l5.628 7.674 2.692-1.794a.5.5 0 0 1 .63.062L13.708 8H15.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.354-.146l-1.71-1.71-2.313 1.542 2.544 3.469.62.845 1.466 2H15.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.403-.204L8.29 9.24l-2.513 1.675A.5.5 0 0 1 5.1 10.8L2.25 7H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .4.2l2.716 3.622 2.082-1.388-3.365-4.588L3.713 3 2.247 1H.5A.5.5 0 0 1 0 .5Z' />
      <path d='M0 3h1.417v1H0V3ZM2.917 3h1.416v1H2.917V3ZM5.833 3H7.25v1H5.833V3ZM8.75 3h1.417v1H8.75V3ZM11.667 3h1.416v1h-1.416V3ZM14.583 3H16v1h-1.417V3ZM0 12h1.417v1H0v-1ZM2.917 12h1.416v1H2.917v-1ZM5.833 12H7.25v1H5.833v-1ZM8.75 12h1.417v1H8.75v-1ZM11.667 12h1.416v1h-1.416v-1ZM14.583 12H16v1h-1.417v-1Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CategoriesAccumulatorIcon);
export default ForwardRef;

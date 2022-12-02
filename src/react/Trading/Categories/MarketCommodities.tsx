import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesMarketCommoditiesIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
        d='M10 3a.5.5 0 0 1 .447.276L12.308 7H13.5a.5.5 0 0 1 .398.197l.05.08 2 4A.5.5 0 0 1 15.5 12H.5a.5.5 0 0 1-.447-.724l2-4A.5.5 0 0 1 2.5 7h1.19l1.863-3.724a.5.5 0 0 1 .354-.267L6 3h4Zm3.19 5H9.846L8.72 11h5.969l-1.5-3ZM6.153 8H2.809l-1.5 3h5.969L6.153 8Zm2.625 0H7.22L8 10.076 8.777 8Zm.912-4H6.309l-1.5 3h6.38l-1.5-3Z'
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
const ForwardRef = forwardRef(CategoriesMarketCommoditiesIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTradeTypeLookbacksIcon = (
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
        d='M9.5 0a6.5 6.5 0 1 1 0 13H1.707l2.147 2.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0l-3-3a.52.52 0 0 1-.135-.249A.499.499 0 0 1 0 12.5l.005.074A.503.503 0 0 1 0 12.51V12.5a.51.51 0 0 1 .077-.267.5.5 0 0 1 .07-.087l-.045.052a.493.493 0 0 1 .033-.04l.011-.012 3-3a.5.5 0 1 1 .708.708L1.707 12H9.5a5.5 5.5 0 0 0 5.496-5.279L15 6.5A5.5 5.5 0 0 0 9.5 1h-5a.5.5 0 0 1 0-1h5Z'
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
const ForwardRef = forwardRef(CategoriesTradeTypeLookbacksIcon);
export default ForwardRef;

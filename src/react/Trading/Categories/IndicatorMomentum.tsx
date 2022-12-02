import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesIndicatorMomentumIcon = (
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
    <path
      d='M7.084 6.223a.5.5 0 0 1 .823-.014l5 7a.5.5 0 0 1-.814.582L7.514 7.38 5.916 9.776A.5.5 0 0 1 5.5 10h-3a.5.5 0 0 1 0-1h2.732l1.852-2.777ZM7.1 2.2a.5.5 0 0 1 .8 0l6 8a.5.5 0 0 1-.8.6L7.5 3.333 4.9 6.8a.5.5 0 0 1-.4.2h-2a.5.5 0 0 1 0-1h1.75L7.1 2.2Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesIndicatorMomentumIcon);
export default ForwardRef;

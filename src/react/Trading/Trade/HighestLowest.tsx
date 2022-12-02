import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeHighestLowestIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.959 8.5a3 3 0 0 1-5.918 0H0v-1h5.041a3 3 0 0 1 5.918 0H16v1h-5.041Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeHighestLowestIcon);
export default ForwardRef;

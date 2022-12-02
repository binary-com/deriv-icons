import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeSellExpiredIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M2.5 1a.5.5 0 0 1 .5.5V2h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3v4.5a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5ZM11 7H9v2h2V7ZM7 7H5v2h2V7Zm6-2h-2v2h2V5ZM9 5H7v2h2V5ZM5 5H3v2h2V5Zm6-2H9v2h2V3ZM7 3H5v2h2V3Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeSellExpiredIcon);
export default ForwardRef;

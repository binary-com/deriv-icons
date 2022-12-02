import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsBollingerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path
      d='M3.415 7.91A21.19 21.19 0 0 1 12.009 6c2.948.028 5.877.678 8.576 1.91a1 1 0 0 0 .83-1.82A23.19 23.19 0 0 0 12.009 4c-3.265.03-6.47.743-9.424 2.09a1 1 0 0 0 .83 1.82Z'
      fill='#85ACB0'
    />
    <path
      d='M3.415 13.91A21.19 21.19 0 0 1 12.009 12c2.948.028 5.877.678 8.576 1.91a1 1 0 0 0 .83-1.82A23.19 23.19 0 0 0 12.009 10c-3.265.03-6.47.743-9.424 2.09a1 1 0 0 0 .83 1.82Z'
      fill='#FF444F'
    />
    <path
      d='M3.415 19.91A21.19 21.19 0 0 1 12.009 18c2.948.028 5.877.678 8.576 1.91a1 1 0 0 0 .83-1.82A23.19 23.19 0 0 0 12.009 16c-3.265.03-6.47.743-9.424 2.09a1 1 0 0 0 .83 1.82Z'
      fill='#FF6444'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsBollingerIcon);
export default ForwardRef;

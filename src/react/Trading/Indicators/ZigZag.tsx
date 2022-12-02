import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsZigZagIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='m5.064 2.65-3 8a1 1 0 1 0 1.872.701l3-8a1 1 0 0 0-1.872-.702Z' fill='#FF444F' />
    <path
      d='m18.832 20.445-12-18a1 1 0 1 0-1.664 1.11l12 18a1 1 0 0 0 1.664-1.11Z'
      fill='#85ACB0'
    />
    <path d='m20.142 15.486-3 5a1 1 0 1 0 1.715 1.029l3-5a1 1 0 1 0-1.715-1.03Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsZigZagIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsFractalChaosIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='m17 2-5 11 5-1.62L22 13 17 2Z' fill='#85ACB0' />
    <path d='m7 22 5-11-5 1.62L2 11l5 11Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsFractalChaosIcon);
export default ForwardRef;

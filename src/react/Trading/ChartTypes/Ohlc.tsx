import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartTypesOhlcIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M7 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 .993.883L12 6a1 1 0 0 1-1 1H8v12a1 1 0 0 1-.883.993L7 20a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-.993-.883L2 13a1 1 0 0 1 1-1h3V3a1 1 0 0 1 .883-.993L7 2Z'
      fill='#85ACB0'
    />
    <path
      d='M17 5a1 1 0 0 1 1 1v12h3a1 1 0 0 1 .993.883L22 19a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-.883.993L17 22a1 1 0 0 1-1-1v-9h-5a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(ChartTypesOhlcIcon);
export default ForwardRef;

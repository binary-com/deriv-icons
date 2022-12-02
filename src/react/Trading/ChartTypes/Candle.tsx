import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartTypesCandleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M3 16a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7v3a1 1 0 1 1-2 0v-3H3Z'
      fill='#85ACB0'
    />
    <path
      d='M18 2a1 1 0 0 1 1 1v4h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-.883.993L18 22a1 1 0 0 1-1-1v-2h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(ChartTypesCandleIcon);
export default ForwardRef;

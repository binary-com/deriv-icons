import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsRateOfChangeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M3 9h18a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2Z' fill='#D6DADB' />
    <path
      d='m7.349 6.066 2.666 15.108c.185 1.049 1.663 1.12 1.948.094L16.34 5.51l1.802 3.004A1 1 0 0 0 19 9h2a1 1 0 1 0 0-2h-1.434l-2.708-4.514c-.453-.753-1.586-.6-1.822.247L11.219 16.48 8.985 3.826a1 1 0 0 0-1.692-.533L3.586 7H3a1 1 0 1 0 0 2h1a1 1 0 0 0 .707-.293L7.35 6.065Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsRateOfChangeIcon);
export default ForwardRef;

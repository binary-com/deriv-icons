import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsAveragesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M2.072 13.371c.187.47.551 1.125 1.122 1.784C4.182 16.295 5.452 17 7 17c2.297 0 3.392-1.296 5.382-5.03C13.992 8.955 14.797 8 16 8c1.388 0 2.419.87 3.175 2.435.284.589.504 1.229.664 1.87.096.383.15.675.17.827a1 1 0 1 0 1.982-.264 10.04 10.04 0 0 0-.212-1.048 11.729 11.729 0 0 0-.804-2.255C19.92 7.379 18.287 6 16 6c-2.297 0-3.391 1.296-5.382 5.03C9.008 14.046 8.203 15 7 15c-.902 0-1.657-.42-2.294-1.155a5.12 5.12 0 0 1-.778-1.216 1 1 0 1 0-1.856.742Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsAveragesIcon);
export default ForwardRef;

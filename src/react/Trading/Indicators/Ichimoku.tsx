import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsIchimokuIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path opacity={0.31} d='M6.97 6.87 4.5 3H3L2 4v17l1.35.5 6.14-8.15-2.52-6.48Z' fill='#FF444F' />
    <path
      opacity={0.3}
      d='m19.5 3-1.15 5h-3.1L13 13l-3.02-.25-.49.6 1.41 6.04 3.1-3.12L17 20l2.43-.61 1.32 2.11L22 21V3h-2.5Z'
      fill='#85ACB0'
    />
    <path
      d='m5.465 5 1.607 2.41 2.958 11.832a1 1 0 0 0 1.677.465l2.185-2.185L16.2 20.6a1 1 0 0 0 1.247.294l1.355-.677 1.49 1.49a1 1 0 0 0 1.415-1.414l-2-2a1 1 0 0 0-1.154-.187l-1.254.626L14.8 15.4a1 1 0 0 0-1.507-.107l-1.751 1.751L8.97 6.757a1 1 0 0 0-.138-.312l-2-3A1 1 0 0 0 6 3H3a1 1 0 0 0 0 2h2.465Z'
      fill='#FF444F'
    />
    <path
      d='m10.095 13.458 2.716.524a1 1 0 0 0 1.117-.61L15.678 9H18a1 1 0 0 0 .98-.804L19.82 4H21a1 1 0 1 0 0-2h-2a1 1 0 0 0-.98.804L17.18 7H15a1 1 0 0 0-.928.629l-1.694 4.233-2.509-.484a1 1 0 0 0-.98.37l-6.68 8.64a1 1 0 0 0 1.582 1.224l6.304-8.154Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsIchimokuIcon);
export default ForwardRef;

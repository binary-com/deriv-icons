import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsContinuousIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m11.646 13.225 6.08 1.737a1 1 0 0 0 1.239-.699l3-11a1 1 0 1 0-1.93-.526l-2.733 10.024-6.027-1.722a1 1 0 0 0-1.224.645l-2.379 7.137-3.858-5.402a1 1 0 0 0-1.628 1.162l5 7a1 1 0 0 0 1.763-.264l2.697-8.092Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsContinuousIcon);
export default ForwardRef;

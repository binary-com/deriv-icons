import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsDonchianIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M5.78 9h2.424l2.822 12.225A1 1 0 0 0 12 22h4a1 1 0 0 0 .992-.876l1.944-15.546 2.619-1.746a1 1 0 0 0-1.11-1.664l-3 2a1 1 0 0 0-.437.708L15.118 20h-2.322L9.974 7.775A1 1 0 0 0 9 7H5a1 1 0 0 0-.97.758l-2 8a1 1 0 1 0 1.94.485L5.78 9Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsDonchianIcon);
export default ForwardRef;

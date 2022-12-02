import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsAroonIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m12.752 8.654 3.168 2.376a1 1 0 0 0 1.45-.273l4.48-7.23a1 1 0 1 0-1.7-1.054l-3.904 6.301L13.12 6.43a1 1 0 0 0-1.422.231l-9.52 13.77a1 1 0 1 0 1.645 1.138l8.929-12.915Z'
      fill='#85ACB0'
    />
    <path
      d='m5.845 7.57 9.323 13.985a1 1 0 0 0 1.54.152l5-5a1 1 0 0 0-1.415-1.414l-4.138 4.137L6.832 5.445a1 1 0 0 0-1.54-.152l-3 3a1 1 0 0 0 1.415 1.414L5.845 7.57Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsAroonIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusLossIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path d='m8 12 6-8H2l6 8Z' fill='#EC3F3F' />
  </svg>
);
const ForwardRef = forwardRef(StatusLossIcon);
export default ForwardRef;

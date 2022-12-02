import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsChannelIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20.732 11.037a1 1 0 0 1 .536 1.927l-18 5a1 1 0 0 1-.536-1.927l18-5Zm-3.026-5.993a1 1 0 1 1 .588 1.912l-13 4a1 1 0 1 1-.588-1.912l13-4Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsChannelIcon);
export default ForwardRef;

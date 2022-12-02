import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsHorizontalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M21 13H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2Z' fill='#85ACB0' />
  </svg>
);
const ForwardRef = forwardRef(DrawingsHorizontalIcon);
export default ForwardRef;

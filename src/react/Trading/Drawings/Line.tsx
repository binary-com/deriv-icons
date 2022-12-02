import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsLineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m3.707 21.707 18-18a1 1 0 0 0-1.414-1.414l-18 18a1 1 0 1 0 1.414 1.414Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsLineIcon);
export default ForwardRef;

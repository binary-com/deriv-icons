import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsRectangleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20 6v12H4V6h16Zm1-2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsRectangleIcon);
export default ForwardRef;

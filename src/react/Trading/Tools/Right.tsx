import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 18 7'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.959 4A3 3 0 0 1 .04 4H0V3h.041A3 3 0 0 1 5.96 3H18v1H5.959Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsRightIcon);
export default ForwardRef;

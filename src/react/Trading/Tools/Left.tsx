import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M17.959 4a3 3 0 0 1-5.918 0H0V3h12.041a3 3 0 0 1 5.918 0H18v1h-.041Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsLeftIcon);
export default ForwardRef;

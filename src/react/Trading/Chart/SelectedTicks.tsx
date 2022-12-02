import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartSelectedTicksIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g clipPath='url(#a)' fill='#333'>
      <path d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143Z' />
      <path d='M5.88 12v-.74h1.95V5.64h-.07L6 7.28l-.49-.53 1.85-1.73h1.31v6.24h1.8V12H5.88Z' />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChartSelectedTicksIcon);
export default ForwardRef;

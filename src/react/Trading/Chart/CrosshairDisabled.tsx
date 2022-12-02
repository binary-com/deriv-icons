import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartCrosshairDisabledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g clipPath='url(#a)'>
      <path
        d='M2.5 7a1 1 0 0 1 1 1A4.5 4.5 0 0 0 8 12.5a1 1 0 0 1 1 1V15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2h1.5ZM8 0a1 1 0 0 1 1 1v.576a6.472 6.472 0 0 1 3.597 1.827A6.472 6.472 0 0 1 14.424 7H15a1 1 0 1 1 0 2h-.576a6.466 6.466 0 0 1-1.173 2.835l1.456 1.458a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 1.414-1.414l1.458 1.456A6.467 6.467 0 0 1 7 1.576V1a1 1 0 0 1 1-1Zm3.183 4.817a4.503 4.503 0 0 0-5.58-.629l6.209 6.208a4.503 4.503 0 0 0-.63-5.579Z'
        fill='#333'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChartCrosshairDisabledIcon);
export default ForwardRef;

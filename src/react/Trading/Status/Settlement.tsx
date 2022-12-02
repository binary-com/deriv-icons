import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusSettlementIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={16} height={16} rx={8} fill='#FFAD3A' />
    <path
      d='M8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM4 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(StatusSettlementIcon);
export default ForwardRef;

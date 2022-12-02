import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <rect width={32} height={32} rx={16} fill='#FF444F' />
    <path
      d='M16.375 7.75a1 1 0 0 1 1 1v5.875h5.875a1 1 0 0 1 1 1v.75a1 1 0 0 1-1 1h-5.875v5.875a1 1 0 0 1-1 1h-.75a1 1 0 0 1-1-1v-5.875H8.75a1 1 0 0 1-1-1v-.75a1 1 0 0 1 1-1h5.875V8.75a1 1 0 0 1 1-1h.75Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(RoundAddIcon);
export default ForwardRef;
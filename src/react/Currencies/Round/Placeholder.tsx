import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundPlaceholderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={32} height={32} rx={16} fill='#F2F3F4' />
  </svg>
);
const ForwardRef = forwardRef(RoundPlaceholderIcon);
export default ForwardRef;

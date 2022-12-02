import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeBarrierIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M1 8.5h14v-1H1v1Z' fill='#333' />
  </svg>
);
const ForwardRef = forwardRef(TradeBarrierIcon);
export default ForwardRef;

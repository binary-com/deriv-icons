import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeBarrierResetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M1 8h2V7H1v1Zm3 0h2V7H4v1Zm3 0h2V7H7v1Zm3 0h2V7h-2v1Zm3 0h2V7h-2v1Z' fill='#333' />
  </svg>
);
const ForwardRef = forwardRef(TradeBarrierResetIcon);
export default ForwardRef;

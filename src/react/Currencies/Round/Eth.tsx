import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundEthIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={32} height={32} rx={16} fill='#EBF0F1' />
    <g fill='#12100B'>
      <path d='M15.998 4v16.565l7.497-4.345L15.998 4Z' fillOpacity={0.8} />
      <path d='M15.998 4 8.5 16.22l7.498 4.35V4Z' fillOpacity={0.45} />
      <path d='M15.998 21.968v6.027L23.5 17.616l-7.502 4.352Z' fillOpacity={0.8} />
      <path d='M15.998 27.995v-6.028L8.5 17.617l7.498 10.378Z' fillOpacity={0.45} />
      <path d='m15.998 20.573 7.497-4.353-7.497-3.348v7.701Z' fillOpacity={0.6} />
      <path d='m8.5 16.22 7.498 4.353v-7.7L8.5 16.22Z' fillOpacity={0.6} />
    </g>
  </svg>
);
const ForwardRef = forwardRef(RoundEthIcon);
export default ForwardRef;

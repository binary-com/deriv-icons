import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsRsiIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path
      d='m8.236 4 2.8 10.263A1 1 0 0 0 12 15h5.34l2.74 6.394a1 1 0 1 0 1.84-.788l-3-7A1 1 0 0 0 18 13h-5.236l-2.8-10.263A1 1 0 0 0 9 2H3a1 1 0 0 0 0 2h5.236Z'
      fill='#85ACB0'
    />
    <path
      d='M6 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h3Zm15 0a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2h7Z'
      fill='#D6DADB'
    />
    <path d='M3 20h13a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsRsiIcon);
export default ForwardRef;

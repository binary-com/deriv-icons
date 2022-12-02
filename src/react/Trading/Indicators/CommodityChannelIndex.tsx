import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsCommodityChannelIndexIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
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
      d='M16.126 2.514a1 1 0 0 1 1.742-.01l4 7a1 1 0 1 1-1.736.992l-3.12-5.459-9.138 16.449a1 1 0 0 1-1.655.139l-4-5a1 1 0 0 1 1.562-1.25l3.069 3.836 9.276-16.697ZM12.75 3a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h9.75Z'
      fill='#85ACB0'
    />
    <path d='M21 19h-9.75a1 1 0 1 0 0 2H21a1 1 0 1 0 0-2Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsCommodityChannelIndexIcon);
export default ForwardRef;

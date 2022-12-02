import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartTypesAreaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g fill='#85ACB0'>
      <path
        d='M2 15.49V22h20V4.31a1.24 1.24 0 0 0-2.13-.93L12 11.58l-2.77-2.9a1.22 1.22 0 0 0-1.84.08L2 15.49Z'
        fillOpacity={0.3}
      />
      <path d='M20.74 3c.08 0 .26.09.26.37V21H3v-5.52l5.19-6.81a.19.19 0 0 1 .16-.09.17.17 0 0 1 .14.07l2.78 3.06a1 1 0 0 0 1.48 0l7.86-8.63c.07-.08.12-.08.13-.08Zm0-1a1.16 1.16 0 0 0-.87.4L12 11 9.23 8a1.17 1.17 0 0 0-.88-.4 1.19 1.19 0 0 0-1 .49L2 15.14V22h20V3.37A1.31 1.31 0 0 0 20.74 2Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(ChartTypesAreaIcon);
export default ForwardRef;

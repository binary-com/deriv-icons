import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsWilliamPercentIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M3 5h4a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Z' fill='#FF444F' />
    <path
      d='M10.037 2.732c.268-.966 1.633-.98 1.92-.02l2.35 7.833 1.766-2.94a1 1 0 0 1 1.745.056l4.07 7.88a1 1 0 0 1-1.777.918l-3.247-6.287-2.007 3.343c-.447.744-1.565.604-1.815-.228l-2.005-6.684-4.074 14.665c-.277.999-1.704.967-1.937-.043l-3-13a1 1 0 1 1 1.948-.45l2.116 9.166 3.947-14.209ZM21 19a1 1 0 1 1 0 2H10a1 1 0 1 1 0-2h11Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsWilliamPercentIcon);
export default ForwardRef;

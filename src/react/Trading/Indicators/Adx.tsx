import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsAdxIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20.419 15.186a1 1 0 1 1 1.162 1.628l-7 5a1 1 0 0 1-1.221-.046L8.06 17.353l-4.354 4.354a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.347-.061l5.407 4.506 6.372-4.552ZM7.293 2.293a1 1 0 0 1 1.466.056l5.297 6.18 6.237-6.236a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.466-.056L7.944 4.47 3.707 8.707a1 1 0 1 1-1.414-1.414l5-5Z'
      fill='#85ACB0'
    />
    <path d='M3 14h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2Z' fill='#D6DADB' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsAdxIcon);
export default ForwardRef;

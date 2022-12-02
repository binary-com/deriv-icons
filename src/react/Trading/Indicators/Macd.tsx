import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsMacdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M6 19v3H3v-3h3Zm8-3v3h-3v-3h3Zm4-4v6h-3v-6h3Zm3-10a1 1 0 1 1 0 2h-4.616l-9.715 8.743A1 1 0 0 1 6 13H3a1 1 0 1 1 0-2h2.616l9.715-8.743A1 1 0 0 1 16 2h5Z'
      fill='#85ACB0'
    />
    <path
      d='M10 18v2H7v-2h3ZM21 5a1 1 0 1 1 0 2h-2.613L7.673 16.74A1 1 0 0 1 7 17H3a1 1 0 1 1 0-2h3.613l10.714-9.74A1 1 0 0 1 18 5h3Zm1 3v9h-3V8h3Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsMacdIcon);
export default ForwardRef;

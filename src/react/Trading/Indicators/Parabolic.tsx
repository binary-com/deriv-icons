import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsParabolicIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m9.976 17.652 2.122 2.121-2.122 2.121-2.12-2.121 2.12-2.121Zm3.18-3.188 2.122 2.122-2.122 2.121-2.12-2.121 2.12-2.121Zm3.18-3.177 2.122 2.122-2.122 2.12-2.12-2.12 2.12-2.122Zm-5.157-.726 2.122 2.121-2.122 2.121-2.121-2.121 2.121-2.121Zm8.347-2.45 2.122 2.12-2.122 2.122-2.12-2.122 2.12-2.12ZM8 7.382l2.122 2.122-2.122 2.121-2.121-2.121 2.121-2.122ZM4.82 4.196l2.122 2.122-2.122 2.12-2.121-2.12 2.121-2.122Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsParabolicIcon);
export default ForwardRef;

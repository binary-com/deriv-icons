import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsAwesomeOscillatorIcon = (
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
    <path d='M9 6.76V22H6V6.76h3ZM13.5 2v20h-3V2h3ZM5 11.52V22H2V11.52h3Z' fill='#85ACB0' />
    <path d='M18 4.86V22h-3V4.86h3Zm4 5.71V22h-3V10.57h3Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsAwesomeOscillatorIcon);
export default ForwardRef;

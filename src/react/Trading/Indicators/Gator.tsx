import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsGatorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M2 22v-8.57h3V7.71h3V2h3v3.81h3V22H2Z' fill='#85ACB0' />
    <path d='M14 22V8.67h3v4.76h3v2.859h2V22h-8Z' fill='#FF444F' />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsGatorIcon);
export default ForwardRef;

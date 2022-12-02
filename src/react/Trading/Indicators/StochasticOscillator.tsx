import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsStochasticOscillatorIcon = (
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
      d='M20.2 15.6a1 1 0 1 0 1.6-1.2l-9-12a1 1 0 0 0-1.507-.107L7.586 6H3a1 1 0 0 0 0 2h5a1 1 0 0 0 .707-.293l3.185-3.185L20.2 15.6Z'
      fill='#85ACB0'
    />
    <path
      d='M20.2 21.6a1 1 0 1 0 1.6-1.2l-9-12a1 1 0 0 0-1.507-.107L7.586 12H3a1 1 0 1 0 0 2h5a1 1 0 0 0 .707-.293l3.185-3.185L20.2 21.6Z'
      fill='#FF444F'
    />
    <path
      d='M14 17a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h11ZM7 2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h4Zm14 0a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h4Z'
      fill='#D6DADB'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsStochasticOscillatorIcon);
export default ForwardRef;

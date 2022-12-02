import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsAlligatorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20.19 2.415a1 1 0 1 1 1.62 1.17l-7.393 10.237 3.86 5.791 2.168-1.445a1 1 0 0 1 1.11 1.664l-3 2a1 1 0 0 1-1.387-.277l-4.001-6.003-4.356 6.034a1 1 0 0 1-1.26.308l-.106-.062-2.318-1.545-1.42 1.42a1 1 0 0 1-1.414-1.414l2-2a1 1 0 0 1 1.262-.125l2.198 1.466 4.23-5.858-6.031-9.045L3.8 7.6a1 1 0 1 1-1.6-1.2l3-4a1 1 0 0 1 1.632.044l6.401 9.601 6.956-9.631Z'
      fill='#85ACB0'
    />
    <path
      d='m6.27 12.144 11.414 3.805A1 1 0 0 0 18.8 15.6l3-4a1 1 0 1 0-1.6-1.2l-2.567 3.423-11.317-3.772a1 1 0 0 0-1.023.242l-3 3a1 1 0 1 0 1.414 1.414l2.563-2.563Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsAlligatorIcon);
export default ForwardRef;

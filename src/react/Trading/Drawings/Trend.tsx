import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsTrendIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <path d='M12 2H2v2h4v8h2V4h4V2Z' fill='#FF444F' />
    <path
      d='m5.747 21.664 16-18a1 1 0 1 0-1.494-1.328l-16 18a1 1 0 0 0 1.494 1.328Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsTrendIcon);
export default ForwardRef;

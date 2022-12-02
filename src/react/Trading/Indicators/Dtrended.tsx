import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsDtrendedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m5.38 8.64 1.65 6.603c.216.864 1.37 1.036 1.828.272l1.881-3.136 2.312 6.937c.304.912 1.594.912 1.898 0l2.396-7.189L19.2 14.6c.55.733 1.713.403 1.796-.51l1-11a1 1 0 0 0-1.992-.18l-.764 8.41L17.8 9.4a1 1 0 0 0-1.749.284l-2.05 6.154-2.052-6.154a1 1 0 0 0-1.806-.198l-1.758 2.93L5.97 2.758c-.27-1.082-1.84-.977-1.964.132l-2 18a1 1 0 1 0 1.988.22L5.379 8.64Z'
      fill='#85ACB0'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsDtrendedIcon);
export default ForwardRef;

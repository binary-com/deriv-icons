import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const DrawingsRayIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M19.5 19.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V20a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V15a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-1 0V10a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5Zm0-2.5a.5.5 0 0 1 .492.41L20 5h.5a.5.5 0 0 1 0 1H20a.497.497 0 0 1-.25-.067A.5.5 0 0 1 19 5.5V5a.5.5 0 0 1 .5-.5ZM18 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1h.5Zm-2.5 0a.5.5 0 0 1 0 1H15a.5.5 0 0 1 0-1h.5ZM13 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1h.5Zm-2.5 0a.5.5 0 0 1 0 1H10a.5.5 0 0 1 0-1h.5ZM8 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1H8ZM5.5 5a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.5ZM3 5a.5.5 0 0 1 0 1h-.5a.5.5 0 0 1 0-1H3Zm16.5-3a.5.5 0 0 1 .5.5V3a.5.5 0 0 1-1 0v-.5a.5.5 0 0 1 .5-.5Z'
      fill='#85ACB0'
    />
    <path
      d='M4 21a1 1 0 0 1-.71-1.71l14-14a1.004 1.004 0 1 1 1.42 1.42l-14 14A1 1 0 0 1 4 21Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(DrawingsRayIcon);
export default ForwardRef;

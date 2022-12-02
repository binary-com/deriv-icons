import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesIndicatorAveragesIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path
      d='M2.494 10.575c.027-.172.088-.484.19-.89.173-.675.4-1.35.689-1.976C4.164 5.992 5.235 5 6.62 5c1.507 0 2.034.756 2.75 3.275l.103.363C10.355 11.71 11.373 13 14 13a.5.5 0 0 0 0-1c-2.046 0-2.793-.947-3.566-3.638l-.102-.36C9.502 5.084 8.748 4 6.62 4 4.76 4 3.402 5.258 2.465 7.29a12.572 12.572 0 0 0-.75 2.15 12.994 12.994 0 0 0-.21.985.5.5 0 0 0 .99.15Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesIndicatorAveragesIcon);
export default ForwardRef;

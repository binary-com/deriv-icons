import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeIdIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M3.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5Zm4.833 0C10.911 3 13 5.239 13 8c0 2.687-1.978 4.879-4.459 4.995L8.333 13H6.467a.503.503 0 0 1-.46-.414L6 12.5v-9a.5.5 0 0 1 .41-.492l.056-.005V3h1.867Zm0 1H7v8h1.333c2.062 0 3.734-1.79 3.734-4 0-2.14-1.569-3.888-3.542-3.995L8.333 4Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeIdIcon);
export default ForwardRef;

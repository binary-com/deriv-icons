import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartExitTimeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={16} height={16} rx={8} fill='#4BB4B3' />
    <path
      d='M3.798 2.667c.245 0 .444.199.444.444v.445h8.202c.491 0 .89.398.89.889v5.333c0 .491-.399.889-.89.889H4.242v2.222a.444.444 0 0 1-.444.445h-.02a.444.444 0 0 1-.445-.445V3.111c0-.245.2-.444.445-.444h.02ZM12.424 8h-1.818v1.778h1.818V8ZM8.788 8H6.97v1.778h1.818V8Zm1.818-1.777H8.788V8h1.818V6.223Zm-3.636 0H5.15V8H6.97V6.223Zm1.818-1.778H6.97v1.778h1.818V4.445Zm3.636 0h-1.818v1.778h1.818V4.445Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(ChartExitTimeIcon);
export default ForwardRef;

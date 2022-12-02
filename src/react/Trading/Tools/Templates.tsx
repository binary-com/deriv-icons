import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsTemplatesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M21.5 2a.5.5 0 0 1 .5.5v19a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h19ZM7 18H3v3h4v-3Zm14 0H8v3h13v-3ZM7 14H3v3h4v-3Zm14 0H8v3h13v-3Zm0-11H3v10h18V3Zm-3.89 2.188a.5.5 0 1 1 .78.624l-4 5a.5.5 0 0 1-.79-.012l-2.654-3.539-3.592 3.593a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .754.054l2.613 3.484 3.597-4.496Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsTemplatesIcon);
export default ForwardRef;

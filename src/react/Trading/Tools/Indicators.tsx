import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsIndicatorsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M20.5 2a.5.5 0 0 1 .492.41L21 2.5V4h.5a.5.5 0 0 1 .492.41L22 4.5a.5.5 0 0 1-.41.492L21.5 5H21v8.5a.5.5 0 0 1-.41.492L20.5 14a.5.5 0 0 1-.492-.41L20 13.5V5H4v15h13.5a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L17.5 21H4v.5a.5.5 0 0 1-.41.492L3.5 22a.5.5 0 0 1-.492-.41L3 21.5V21h-.5a.5.5 0 0 1-.492-.41L2 20.5a.5.5 0 0 1 .41-.492L2.5 20H3V5h-.5a.5.5 0 0 1-.492-.41L2 4.5a.5.5 0 0 1 .41-.492L2.5 4H3V2.5a.5.5 0 0 1 .41-.492L3.5 2a.5.5 0 0 1 .492.41L4 2.5V4h16V2.5a.5.5 0 0 1 .41-.492L20.5 2Zm-1 13a.5.5 0 0 1 .492.41l.008.09V17h1.5a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L21.5 18H20v1.5a.5.5 0 0 1-.41.492L19.5 20a.5.5 0 0 1-.492-.41L19 19.5V18h-1.5a.5.5 0 0 1-.492-.41L17 17.5a.5.5 0 0 1 .41-.492L17.5 17H19v-1.5a.5.5 0 0 1 .41-.492L19.5 15Zm-2.39-5.812a.5.5 0 1 1 .78.624l-4 5a.5.5 0 0 1-.79-.012l-2.654-3.539-3.592 3.593a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .754.054l2.613 3.484 3.597-4.496Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsIndicatorsIcon);
export default ForwardRef;

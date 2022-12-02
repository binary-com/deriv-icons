import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsDrawingToolsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m2.291 21.955-.039-.02-.008-.005a.506.506 0 0 1-.172-.17l-.009-.016a.486.486 0 0 1-.037-.402l2-6a.5.5 0 0 1 .046-.101l.034-.049.04-.046 13-13a.5.5 0 0 1 .707 0l4 4a.5.5 0 0 1 0 .708l-13 13a.507.507 0 0 1-.195.12L5.582 21 19.5 21a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.5.5H2.515a.487.487 0 0 1-.187-.03l-.006-.002a.213.213 0 0 1-.03-.013Zm2.427-5.53L3.29 20.709l4.284-1.428-2.856-2.856ZM15 5.707 5.207 15.5l3.292 3.292 9.793-9.793L15 5.707Zm2.5-2.5L15.707 5l3.292 3.292L20.793 6.5 17.5 3.207Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsDrawingToolsIcon);
export default ForwardRef;

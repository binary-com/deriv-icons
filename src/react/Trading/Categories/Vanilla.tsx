import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesVanillaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g fill='#333'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M12.053 1.276A.5.5 0 0 1 12.5 1h3a.5.5 0 0 1 0 1h-2.691L6.447 14.724a.5.5 0 0 1-.888.012L2.227 8.5H.5a.5.5 0 0 1 0-1h2.026a.5.5 0 0 1 .441.264l3.018 5.647 6.068-12.135Z'
      />
      <path d='M11 7.5h4.5a.5.5 0 0 1 0 1h-5l.5-1ZM4 7.5h4l-.5 1h-3l-.5-1Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(CategoriesVanillaIcon);
export default ForwardRef;

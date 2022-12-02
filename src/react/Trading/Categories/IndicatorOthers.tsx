import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesIndicatorOthersIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M6.814 7.076a.5.5 0 0 1 .652.644l-2.5 6.46a.5.5 0 0 1-.932 0l-2.5-6.46a.5.5 0 0 1 .652-.644L4.5 8l2.314-.925ZM6.12 8.43l-1.433.573a.5.5 0 0 1-.372 0l-1.433-.573L4.5 12.615 6.12 8.43Zm4.91-6.6a.5.5 0 0 1 .942 0l2.5 7a.5.5 0 0 1-.67.628L11.5 8.465l-2.302.994a.5.5 0 0 1-.669-.627l2.5-7Zm.471 1.656L9.858 8.085l1.444-.624a.5.5 0 0 1 .396 0l1.444.624L11.5 3.487Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesIndicatorOthersIcon);
export default ForwardRef;

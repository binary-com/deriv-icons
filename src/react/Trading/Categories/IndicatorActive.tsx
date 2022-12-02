import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesIndicatorActiveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='m8.889 5.95 2.119-2.98c.206-.34.202-.726.01-1.03a.95.95 0 0 0-.897-.437L7.84 1.5a.992.992 0 0 0-.862.46l-4 6.23c-.185.343-.167.718.027 1.01a.95.95 0 0 0 .882.418l2.725.002-1.573 3.684c-.218.512.437.944.822.541l6.07-6.36.06-.076a.95.95 0 0 0-.887-1.457L8.89 5.951Zm2.171 1-4.017 4.21.787-1.843a.5.5 0 0 0-.46-.697H3.89L7.82 2.5h2.296L7.513 6.16a.5.5 0 0 0 .407.79h3.14Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesIndicatorActiveIcon);
export default ForwardRef;

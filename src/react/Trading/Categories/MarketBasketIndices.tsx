import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesMarketBasketIndicesIcon = (
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
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8 1a.5.5 0 0 1 .41.213L11.76 6h3.74a.5.5 0 0 1 0 1h-.585l-1.424 7.592A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.491-.408L1.085 7H.5a.5.5 0 0 1 0-1h3.74l3.35-4.787A.5.5 0 0 1 8 1ZM4.493 7h9.404l-1.312 7h-9.17L2.102 7h2.391Zm6.047-1H5.46L8 2.372 10.54 6ZM5.5 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5ZM8 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 8Zm2.5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesMarketBasketIndicesIcon);
export default ForwardRef;

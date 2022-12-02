import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTradeTypeMultipliersIcon = (
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
    <g fill='#333'>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.138 2.155A.5.5 0 0 1 13.5 2h2a.5.5 0 0 1 0 1h-1.786L3.362 13.845A.5.5 0 0 1 3 14H.5a.5.5 0 0 1 0-1h2.286L13.138 2.155Z'
      />
      <path d='m6.09 6.642.692-.725L3.37 2.164A.5.5 0 0 0 3 2H.5a.5.5 0 0 0 0 1h2.279l3.31 3.642ZM9.462 10.351l.692-.725L13.221 13H15.5a.5.5 0 0 1 0 1H13a.5.5 0 0 1-.37-.164l-3.168-3.485Z' />
    </g>
  </svg>
);
const ForwardRef = forwardRef(CategoriesTradeTypeMultipliersIcon);
export default ForwardRef;

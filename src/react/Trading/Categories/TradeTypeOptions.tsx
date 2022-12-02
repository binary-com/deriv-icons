import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTradeTypeOptionsIcon = (
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
      d='M4.5 7a.5.5 0 0 1 .492.41L5 7.5v5.792l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3 3-.013.011a.484.484 0 0 1-.039.033l.052-.044A.505.505 0 0 1 4.5 15h-.02a.51.51 0 0 1-.052-.005L4.5 15a.5.5 0 0 1-.284-.089l-.018-.013a.484.484 0 0 1-.04-.033l-.012-.011-3-3a.5.5 0 0 1 .638-.765l.07.057L4 13.294V7.5a.5.5 0 0 1 .5-.5Zm7-6h.011c.021 0 .042.002.063.005L11.5 1a.502.502 0 0 1 .284.089l.018.013c.014.01.027.02.04.033l.012.011 3 3a.5.5 0 0 1-.638.765l-.07-.057L12 2.706V8.5a.5.5 0 0 1-.992.09L11 8.5V2.706l-2.148 2.15a.5.5 0 0 1-.638.057l-.07-.058a.5.5 0 0 1-.057-.637l.058-.07 3.001-3.002.013-.011a.494.494 0 0 1 .039-.033l-.052.044A.504.504 0 0 1 11.5 1Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesTradeTypeOptionsIcon);
export default ForwardRef;

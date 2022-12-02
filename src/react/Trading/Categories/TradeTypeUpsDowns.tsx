import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTradeTypeUpsDownsIcon = (
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
      d='M4.511 0c.021 0 .042.002.063.005l.031.006.046.012.04.015a.494.494 0 0 1 .076.04l.039.026.048.042L4.81.108l.011.01a.504.504 0 0 1 .02.017l3.012 3.011a.5.5 0 0 1-.638.765l-.07-.057L5 1.707V15.5a.5.5 0 0 1-.41.492L4.5 16a.5.5 0 0 1-.492-.41L4 15.5V1.707L1.854 3.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L4.16.134a.502.502 0 0 1 .236-.123l.036-.006L4.5 0h.011ZM11.5 16a.463.463 0 0 1-.151-.023l-.04-.015a.497.497 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04a.522.522 0 0 0 .042.037l.01.007a.475.475 0 0 1-.04-.033l-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L11 14.292V.5a.5.5 0 0 1 .41-.492L11.5 0a.5.5 0 0 1 .492.41L12 .5v13.792l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.476.476 0 0 1-.19.11.484.484 0 0 1-.046.013l-.036.005h-.002l-.014.003-.026.002.02-.001.019-.004L11.5 16Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesTradeTypeUpsDownsIcon);
export default ForwardRef;

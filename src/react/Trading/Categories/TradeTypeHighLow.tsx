import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesTradeTypeHighLowIcon = (
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
    <g clipPath='url(#a)'>
      <path
        d='M15.5 15a.5.5 0 0 1 .09.992L15.5 16h-8a.5.5 0 0 1-.09-.992L7.5 15h8ZM4.784 1.089l.07.057 3 3a.5.5 0 0 1-.638.765l-.07-.057L5 2.707V15.5a.5.5 0 0 1-.41.492L4.5 16a.5.5 0 0 1-.492-.41L4 15.5V2.707L1.854 4.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07 3-3a.5.5 0 0 1 .638-.057ZM11.5 15a.463.463 0 0 1-.151-.023l-.04-.015a.497.497 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04a.522.522 0 0 0 .042.037l.01.007a.475.475 0 0 1-.04-.033l-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L11 13.292V.5a.5.5 0 0 1 .41-.492L11.5 0a.5.5 0 0 1 .492.41L12 .5v12.792l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.476.476 0 0 1-.19.11.484.484 0 0 1-.046.013l-.036.005h-.002l-.014.003-.026.001h.02l.019-.004L11.5 15Zm-3-15a.5.5 0 0 1 .09.992L8.5 1h-8A.5.5 0 0 1 .41.008L.5 0h8Z'
        fill='#333'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(CategoriesTradeTypeHighLowIcon);
export default ForwardRef;

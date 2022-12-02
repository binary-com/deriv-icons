import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartEntrySpotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0Zm0 1.143a6.858 6.858 0 0 0-6.84 6.356H8.13L6.167 5.496a.593.593 0 0 1-.066-.744l.066-.081a.563.563 0 0 1 .808 0l2.858 2.917A.585.585 0 0 1 10 8l-.006-.081a.6.6 0 0 1 .005.05L10 8a.46.46 0 0 1-.006.082l-.004.012a.566.566 0 0 1-.157.318L6.975 11.33a.563.563 0 0 1-.808 0 .592.592 0 0 1 0-.825L8.131 8.5h-6.97A6.858 6.858 0 1 0 8 1.144Z'
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
const ForwardRef = forwardRef(ChartEntrySpotIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ChartExitSpotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
        d='M8 0a8 8 0 0 1 7.994 8.318L16 8a8.2 8.2 0 0 1-.06.985l-.005.042a8.101 8.101 0 0 1-.043.292l-.01.052a7.655 7.655 0 0 1-.202.876 7.96 7.96 0 0 1-.676 1.623 8.038 8.038 0 0 1-3.134 3.133l.253-.146a8.066 8.066 0 0 1-1.5.703 7.874 7.874 0 0 1-1.625.378 8.004 8.004 0 0 1-.306.032l-.015.002a8.112 8.112 0 0 1-.428.024L8 16a8 8 0 0 1-8-8v-.001l.004-.248.002-.072L0 8a8.133 8.133 0 0 1 .243-1.964A7.961 7.961 0 0 1 .997 4.13a8.04 8.04 0 0 1 2.7-2.876l.18-.111c.086-.052.17-.1.253-.146l-.253.146A7.983 7.983 0 0 1 5.352.449l.03-.01A7.928 7.928 0 0 1 8 0Zm0 11.429H4.572v2.29A6.636 6.636 0 0 0 8 14.667v-3.238Zm5.719 0h-2.29v2.29a6.7 6.7 0 0 0 2.29-2.29Zm-2.29-3.43H8v3.43h3.429v-3.43ZM4.572 8 1.333 8c0 1.254.346 2.427.948 3.429h2.29v-3.43Zm9.147-3.428h-2.29V8h3.238a6.636 6.636 0 0 0-.948-3.429Zm-5.72 0H4.573V8H8V4.572Zm.002-3.238v3.238h3.428v-2.29A6.635 6.635 0 0 0 8 1.333Zm-5.72 3.238h2.29v-2.29a6.7 6.7 0 0 0-2.29 2.29Z'
        fill='#4BB4B3'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <path fill='#fff' d='M0 0h16v16H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(ChartExitSpotIcon);
export default ForwardRef;

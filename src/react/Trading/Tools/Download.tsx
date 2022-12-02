import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const ToolsDownloadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <path
      d='M5.5 16a.5.5 0 0 1 .5.5V18h12v-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h3ZM5 17H3v4h18v-4h-2v1.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V17Zm8.5-15a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 .4.8l-4.5 6a.5.5 0 0 1-.8 0l-4.5-6a.5.5 0 0 1 .4-.8H10V2.5a.5.5 0 0 1 .5-.5h3ZM13 3h-2v7.5a.5.5 0 0 1-.5.5h-2l3.5 4.667L15.5 11h-2a.5.5 0 0 1-.5-.5V3Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(ToolsDownloadIcon);
export default ForwardRef;

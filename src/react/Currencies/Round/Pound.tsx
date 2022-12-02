import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundPoundIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    width='32px'
    height='32px'
    ref={ref}
    {...props}
  >
    <rect width={32} height={32} rx={16} fill='#fff' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M20.174.55c2.047.553 3.932 1.5 5.567 2.757l-5.567 5.567V.551ZM.55 11.827a15.942 15.942 0 0 1 2.756-5.568l5.568 5.568H.55Zm28.141-5.567a15.942 15.942 0 0 1 2.757 5.567h-8.324l5.567-5.567ZM.552 20.174a15.944 15.944 0 0 0 2.755 5.567l5.568-5.567H.55Zm5.707 8.518a15.944 15.944 0 0 0 5.567 2.756v-8.323l-5.567 5.567Zm0-25.385A15.943 15.943 0 0 1 11.826.551v8.323L6.259 3.307Zm13.915 28.141a15.944 15.944 0 0 0 5.567-2.756l-5.567-5.567v8.323Zm8.518-5.707-5.567-5.567h8.324a15.94 15.94 0 0 1-2.757 5.567Z'
      fill='#283991'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M31.865 13.913H18.087V.135a16.16 16.16 0 0 0-4.174 0v13.778H.135a16.16 16.16 0 0 0 0 4.174h13.778v13.778a16.166 16.166 0 0 0 4.174 0V18.087h13.778a16.166 16.166 0 0 0 0-4.174Zm-11.691 6.26 7.14 7.14c.328-.328.641-.67.94-1.026l-6.112-6.113h-1.968Zm-8.348.001v1.967l-6.113 6.113a16.04 16.04 0 0 1-1.027-.94l7.14-7.14Zm.004-8.348-7.14-7.14c-.328.329-.641.672-.94 1.027l6.113 6.113h1.967Zm15.484-7.14-7.14 7.14V9.86l6.113-6.113c.355.299.698.612 1.027.94Z'
      fill='#F44336'
    />
  </svg>
);
const ForwardRef = forwardRef(RoundPoundIcon);
export default ForwardRef;

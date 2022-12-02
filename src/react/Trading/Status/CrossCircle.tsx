import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const StatusCrossCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <rect width={16} height={16} rx={8} fill='#EC3F3F' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M5.146 5.146a.5.5 0 0 1 .708 0L8 7.293l2.146-2.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L8.707 8l2.147 2.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L8 8.707l-2.146 2.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L7.293 8 5.146 5.854a.5.5 0 0 1-.057-.638l.057-.07Z'
      fill='#fff'
    />
  </svg>
);
const ForwardRef = forwardRef(StatusCrossCircleIcon);
export default ForwardRef;

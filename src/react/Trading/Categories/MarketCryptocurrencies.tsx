import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const CategoriesMarketCryptocurrenciesIcon = (
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
      d='M10.75 0v2.666a6.02 6.02 0 0 1 1.782 1.402l.61.703-2.14 2.14-.701-.836a3 3 0 1 0 0 3.85l.701-.837 2.14 2.14-.61.704a6.02 6.02 0 0 1-1.782 1.402V16h-2.5v-2.005a6.104 6.104 0 0 1-.5 0V16h-2.5v-2.666A6 6 0 0 1 2 8a5.999 5.999 0 0 1 3.25-5.334V0h2.5v2.005a6.086 6.086 0 0 1 .5 0V0h2.5Zm-2 3.056a5.02 5.02 0 0 0-2 .101V1h-.5v2.315a5 5 0 0 0-.5 9.152 5.022 5.022 0 0 0 .5.218V15h.5v-2.158a4.97 4.97 0 0 0 1.5.152 5.043 5.043 0 0 0 1-.152V15h.5v-2.315a4.983 4.983 0 0 0 2.027-1.408l-.71-.71A3.983 3.983 0 0 1 7.935 12a4 4 0 1 1 3.132-6.566l.71-.71A5.026 5.026 0 0 0 9.75 3.315V1h-.5v2.158a4.974 4.974 0 0 0-.5-.102Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(CategoriesMarketCryptocurrenciesIcon);
export default ForwardRef;

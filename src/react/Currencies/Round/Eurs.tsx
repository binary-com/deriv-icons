import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const RoundEursIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
    <g clipPath='url(#a)'>
      <rect width={32} height={32} rx={16} fill='#fff' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 16c0 8.837 7.164 16 16 16a15.948 15.948 0 0 0 6.351-1.31c-.773-.08-1.54-.199-2.3-.358-1.697-.365-3.252-.921-4.664-1.668-2.943-1.56-5.013-3.844-6.21-6.849H3.84l1.621-3.835H8.23a18.233 18.233 0 0 1-.15-2.266c0-.73.025-1.386.075-1.967H3.84l1.621-3.811h3.466c1.098-3.22 3.134-5.702 6.11-7.446A17.36 17.36 0 0 1 20.042.515 16.031 16.031 0 0 0 16 0C7.164 0 0 7.164 0 16ZM25.44 3.08c-4.917.63-9.81 2.669-11.63 6.857h14.82l-1.647 3.811H12.868c-.067.564-.1 1.253-.1 2.067 0 .814.067 1.536.2 2.165h12.07l-1.646 3.835h-8.903c2.021 3.333 7.176 5.497 12.571 5.747A15.954 15.954 0 0 0 32 16c0-5.306-2.583-10.009-6.56-12.92Z'
        fill='#2469E4'
      />
    </g>
    <defs>
      <clipPath id='a'>
        <rect width={32} height={32} rx={16} fill='#fff' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(RoundEursIcon);
export default ForwardRef;

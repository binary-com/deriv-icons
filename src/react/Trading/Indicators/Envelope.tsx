import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const IndicatorsEnvelopeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M2 16.027c.08 2.866 2.681 4.031 5.387 2.895.552-.23.974-.493 1.702-1.012l.292-.207c1.051-.743 1.584-.93 2.377-.733.713.178 1.182.567 2.194 1.71l.01.012c.389.438.572.638.814.878 1.579 1.734 3.93 2.646 6.316 2.425a1 1 0 0 0-.184-1.991 5.64 5.64 0 0 1-4.689-1.818c-.237-.236-.4-.415-.76-.82l-.01-.013c-1.274-1.438-1.968-2.014-3.207-2.324-1.495-.372-2.533-.006-4.014 1.04l-.3.212c-.611.436-.937.639-1.313.796-1.537.645-2.58.178-2.615-1.105a1 1 0 0 0-2 .055Z'
      fill='#FF6444'
    />
    <path
      d='M2 3.027C2.08 5.93 4.68 7.086 7.395 5.92c.688-.29 1.136-.664 1.96-1.504l.1-.102c.884-.901 1.272-1.136 1.846-1.061 1.226.158 1.955.782 3.3 2.566l.158.208c.193.255.321.423.456.594C16.95 8.816 18.701 10 21 10a1 1 0 0 0 0-2c-1.556 0-2.822-.856-4.215-2.62a31.143 31.143 0 0 1-.43-.56l-.157-.207c-1.652-2.189-2.71-3.096-4.64-3.345-1.4-.182-2.235.324-3.531 1.644l-.1.103c-.639.651-.948.909-1.315 1.063-1.547.665-2.577.208-2.612-1.105a1 1 0 1 0-2 .054Z'
      fill='#85ACB0'
    />
    <path
      d='M2 9.026c.079 2.997 2.644 4.156 5.417 2.883.544-.25.994-.598 1.664-1.217l.262-.243c1.202-1.121 1.675-1.364 2.274-1.115.433.176.832.581 1.395 1.379l.162.232.165.237c.138.2.238.34.34.477.206.27 1.108 1.486 1.355 1.8 1.467 1.867 2.89 2.803 5.723 3.511a1 1 0 1 0 .485-1.94c-2.398-.6-3.44-1.285-4.636-2.806-.225-.287-1.117-1.491-1.333-1.773a62.26 62.26 0 0 1-.627-.892c-.77-1.09-1.386-1.717-2.27-2.075-1.605-.666-2.643-.134-4.397 1.502l-.255.237c-.523.483-.846.733-1.142.869-1.58.725-2.546.289-2.582-1.118a1 1 0 0 0-2 .052Z'
      fill='#FF444F'
    />
  </svg>
);
const ForwardRef = forwardRef(IndicatorsEnvelopeIcon);
export default ForwardRef;

import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const TradeDealProtectionIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d='M13.5 0a1.5 1.5 0 0 1 1.493 1.356L15 1.5V2h.5a.5.5 0 0 1 .492.41L16 2.5v3a.5.5 0 0 1-.41.492L15.5 6h-1.551c-.33 4.669-2.255 7.689-5.778 8.97a.5.5 0 0 1-.342 0C3.942 13.556 2 10.026 2 4.5a.5.5 0 0 1 .394-.489 9.782 9.782 0 0 0 2.617-.95c.979-.534 1.86-1.175 2.644-1.923a.5.5 0 0 1 .69 0 12.437 12.437 0 0 0 2.644 1.923l.011.006V2.5a.5.5 0 0 1 .41-.492L11.5 2h.5v-.5A1.5 1.5 0 0 1 13.5 0ZM8 2.178l-.31.269a13.568 13.568 0 0 1-2.2 1.492c-.516.281-1.068.52-1.657.715l-.449.139-.381.102.009.326c.148 4.472 1.704 7.313 4.666 8.612l.25.104.072.028.072-.028c2.943-1.174 4.57-3.793 4.875-7.936L11.5 6a.5.5 0 0 1-.492-.41L11 5.5V4.186l-.162-.077-.327-.17a13.67 13.67 0 0 1-1.789-1.162l-.412-.33L8 2.178ZM8 4a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L7.5 11.5v-7A.5.5 0 0 1 8 4Zm7-1h-3v2h3V3Zm-1.5-2a.5.5 0 0 0-.492.41L13 1.5V2h1v-.5a.5.5 0 0 0-.5-.5Z'
      fill='#333'
    />
  </svg>
);
const ForwardRef = forwardRef(TradeDealProtectionIcon);
export default ForwardRef;

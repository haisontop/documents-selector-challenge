import React, { forwardRef } from 'react';

import { type SvgIconProps, Icon } from '../icon';

export const LeftArrow = forwardRef<SVGSVGElement, SvgIconProps>(
  ({ color = 'currentColor', ...props }: SvgIconProps, forwardedRef) => {
    return (
      <Icon {...props}>
        <svg
          fill={color}
          height="inherit"
          ref={forwardedRef}
          viewBox="0 0 24 24"
          width="inherit"
          {...props}
        >
          <path d="M15.002 8.28a1.3 1.3 0 0 0 .07 1.8l.23.2a.23.23 0 0 1-.035.35.23.23 0 0 1-.125.04h-9.81a1.31 1.31 0 0 0-1.33 1.27 1.27 1.27 0 0 0 1.27 1.34h9.87a.23.23 0 0 1 .16.39l-.3.21a1.29 1.29 0 0 0 .203 2.013 1.26 1.26 0 0 0 1.597-.203l2.82-2.84a1.209 1.209 0 0 0 .37-.88 1.3 1.3 0 0 0-.37-.9l-2.82-2.79a1.25 1.25 0 0 0-1.8 0Z" />
        </svg>
      </Icon>
    );
  },
);
LeftArrow.displayName = 'LeftArrow';

export default LeftArrow;

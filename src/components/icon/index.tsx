import type { ReactElement, SVGProps} from 'react';
import type React from 'react';
import { cloneElement } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  children: React.ReactNode;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export interface SvgIconProps extends Omit<IconProps, 'children'> {
  _placeholder?: never;
}

export const Icon = (props: IconProps): JSX.Element => {
  const { children, color, ...restProps } = props;
  const style = {
    overflow: 'hidden',
    display: 'inline-block',
    // margin: 15,
    color: color || 'inherit',
    fill: 'currentColor',
    pointerEvents: 'none',
  };
  return cloneElement(children as ReactElement, {
    width: '1.5em',
    height: '1.5em',
    role: 'img',
    focusable: false,
    style,
    ...restProps,
  });
};

export default Icon;

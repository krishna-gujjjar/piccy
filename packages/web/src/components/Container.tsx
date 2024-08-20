import { useMemo } from 'react';
import type { PropsWithChildren } from 'react';

import { BORDER_RADIUS, BORDER_WIDTH, SHADOW, SIZE } from '@/configs/properties';

interface ContainerProps extends PropsWithChildren {
  bg: string;
  color: string;
  withBorder: boolean;
  withShadow: boolean;
  borderColor: string;
  size: 'sm' | 'md' | 'lg' | number;
  rounded: 'sm' | 'md' | 'lg' | 'full';
}

const Container = (props: ContainerProps): JSX.Element => {
  const borderWidth = useMemo(
    () =>
      props.withBorder
        ? BORDER_WIDTH[typeof props.size === 'string' ? props.size : 'md']
        : undefined,
    [props.size, props.withBorder]
  );

  const shadow = useMemo(
    () => (props.withShadow ? { ...SHADOW, shadowColor: props.color } : {}),
    [props.color, props.withShadow]
  );

  const size = useMemo(
    () => Math.round(typeof props.size === 'string' ? SIZE[props.size] : props.size),
    [props.size]
  );

  const borderRadius = useMemo(
    () => Math.round(size / BORDER_RADIUS[props.rounded]),
    [props.rounded, size]
  );

  return (
    <div
      style={{
        ...shadow,
        width: size,
        padding: 5,
        borderWidth,
        height: size,
        borderRadius,
        display: 'flex',
        overflow: 'hidden',
        borderStyle: 'solid',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.bg,
        borderColor: props.withBorder ? props.borderColor : undefined,
        boxShadow: props.withShadow ? `10px 10px 10px ${props.color}80` : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export default Container;

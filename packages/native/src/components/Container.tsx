import { useMemo } from 'react';
import type { PropsWithChildren } from 'react';
import { View } from 'react-native';
import type { ColorValue } from 'react-native';

import { BORDER_RADIUS, BORDER_WIDTH, SHADOW, SIZE } from '@/configs/properties';

interface ContainerProps extends PropsWithChildren {
  bg: ColorValue;
  color: ColorValue;
  withBorder: boolean;
  withShadow: boolean;
  borderColor: ColorValue;
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
    <View
      style={{
        width: size,
        borderWidth,
        height: size,
        ...shadow,
        borderRadius,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.bg,
        borderColor: props.withBorder ? props.borderColor : undefined,
      }}
    >
      {props.children}
    </View>
  );
};

export default Container;

import { Suspense, lazy, useMemo } from 'react';
import type { ColorValue } from 'react-native';
import type { Svg, SvgProps } from 'react-native-svg';

import { SIZE } from '@/configs/properties';

type ShapeType = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<SvgProps & React.RefAttributes<Svg>>
>;

type ShapeProps = {
  value: number;
  color?: ColorValue;
  size: 'lg' | 'md' | 'sm' | number;
};

const Shape = (props: ShapeProps): JSX.Element => {
  const ShapeComponent = lazy<ShapeType>(() => import(`./../shapes/shape-${props.value}.tsx`));
  const size = useMemo(
    () => (typeof props.size === 'string' ? SIZE[props.size] / 1.3 : props.size),
    [props.size]
  );

  return (
    <Suspense>
      <ShapeComponent color={props.color} height={size} width={size} />
    </Suspense>
  );
};

export default Shape;

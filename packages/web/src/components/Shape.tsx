import { Suspense, lazy, useMemo } from 'react';
import type {
  ForwardRefExoticComponent,
  MemoExoticComponent,
  RefAttributes,
  SVGAttributes,
} from 'react';

import { SIZE } from '@/configs/properties';

type ShapeType = MemoExoticComponent<
  ForwardRefExoticComponent<SVGAttributes<SVGSVGElement> & RefAttributes<SVGSVGElement>>
>;

type ShapeProps = {
  value: number;
  color?: string;
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

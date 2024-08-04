import React from 'react';
import type { ForwardedRef } from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

const SVGComponent = React.forwardRef(
  (props: SvgProps, ref: ForwardedRef<Svg>): JSX.Element => (
    <Svg ref={ref} fill="none" height={200} width={200} viewBox="0 0 200 200" {...props}>
      <Path
        fill="currentColor"
        d="m100 0 24.1 58.258L186.603 50 148.2 100l38.403 50-62.503-8.258L100 200l-24.1-58.258L13.398 150 51.8 100 13.398 50 75.9 58.258z"
      />
    </Svg>
  )
);
const Shape1 = React.memo(SVGComponent);
Shape1.displayName = 'Shapes.01';
export default Shape1;

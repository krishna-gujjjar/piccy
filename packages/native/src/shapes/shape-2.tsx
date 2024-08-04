import React from 'react';
import type { ForwardedRef } from 'react';
import Svg, { type SvgProps, Path } from 'react-native-svg';

const SVGComponent = React.forwardRef(
  (props: SvgProps, ref: ForwardedRef<Svg>): JSX.Element => (
    <Svg ref={ref} width={200} height={200} fill="none" viewBox="0 0 200 200" {...props}>
      <Path
        fill="currentColor"
        d="M100.106 0 115 54.16l43.884-35.062-19.784 52.57 56.111-2.57L148.306 100l46.905 30.902-56.111-2.571 19.784 52.571L115 145.841 100.106 200l-14.895-54.159-43.884 35.061 19.784-52.571L5 130.902 51.906 100 5 69.098l56.111 2.57-19.784-52.57L85.211 54.16z"
      />
    </Svg>
  )
);
const Shape2 = React.memo(SVGComponent);
Shape2.displayName = 'Shapes.02';
export default Shape2;

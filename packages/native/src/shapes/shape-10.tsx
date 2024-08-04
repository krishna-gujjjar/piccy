import React from 'react';
import type { ForwardedRef } from 'react';
import Svg, { type SvgProps, ClipPath, Path, G } from 'react-native-svg';

const SVGComponent = React.forwardRef(
  (props: SvgProps, ref: ForwardedRef<Svg>): JSX.Element => (
    <Svg ref={ref} width={200} height={200} fill="none" viewBox="0 0 200 200" {...props}>
      <ClipPath id="a">
        <Path d="M0 0h200v200H0z" />
      </ClipPath>
      <G clipPath="url(#a)">
        <Path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120 0H80v51.716L43.432 15.147 15.147 43.431 51.716 80H0v40h51.716l-36.569 36.568 28.285 28.285L80 148.284V200h40v-51.716l36.569 36.569 28.284-28.284L148.284 120H200V80h-51.716l36.569-36.569-28.284-28.284L120 51.716z"
        />
      </G>
    </Svg>
  )
);
const Shape10 = React.memo(SVGComponent);
Shape10.displayName = 'Shapes.10';
export default Shape10;

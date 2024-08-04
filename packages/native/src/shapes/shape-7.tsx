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
          clipRule="evenodd"
          fillRule="evenodd"
          d="M107.143 0H92.857v82.756L34.34 24.239 24.24 34.34l58.517 58.517H0v14.286h82.756L24.238 165.66l10.101 10.101 58.517-58.517V200h14.286v-82.756l58.517 58.517 10.101-10.101-58.517-58.517H200V92.857h-82.756l58.517-58.517-10.101-10.101-58.517 58.517z"
        />
      </G>
    </Svg>
  )
);
const Shape7 = React.memo(SVGComponent);
Shape7.displayName = 'Shapes.07';
export default Shape7;

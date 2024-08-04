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
          d="M89.932 6.129c4.225-8.172 15.911-8.172 20.136 0l26.905 52.035a11.33 11.33 0 0 0 4.863 4.863l52.035 26.905c8.172 4.225 8.172 15.911 0 20.136l-52.035 26.905a11.33 11.33 0 0 0-4.863 4.863l-26.905 52.035c-4.225 8.172-15.911 8.172-20.136 0l-26.905-52.035a11.33 11.33 0 0 0-4.863-4.863L6.13 110.068c-8.172-4.225-8.172-15.911 0-20.136l52.035-26.905a11.34 11.34 0 0 0 4.863-4.863z"
        />
      </G>
    </Svg>
  )
);
const Shape3 = React.memo(SVGComponent);
Shape3.displayName = 'Shapes.03';
export default Shape3;

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
          d="M93.68 5.155a10 10 0 0 1 12.64 0l7.933 6.47a10 10 0 0 0 8.93 1.904l9.856-2.664a10 10 0 0 1 11.533 5.14l4.657 9.21a10 10 0 0 0 7.359 5.364l10.129 1.605a10 10 0 0 1 8.422 9.364l.533 10.39a10 10 0 0 0 4.527 7.865l8.666 5.649a10 10 0 0 1 3.878 11.952l-3.728 9.742a10 10 0 0 0 .943 9.007l5.66 8.746a10 10 0 0 1-1.312 12.49l-7.33 7.359a10 10 0 0 0-2.792 8.621l1.631 10.299a10 10 0 0 1-6.284 10.896l-9.61 3.7a10 10 0 0 0-6.072 6.765l-2.661 10.018a10 10 0 0 1-10.199 7.419l-10.209-.546a10 10 0 0 0-8.328 3.719l-6.438 8.008a10 10 0 0 1-12.361 2.63l-9.086-4.665a10 10 0 0 0-9.134 0l-9.087 4.665a10 10 0 0 1-12.36-2.63l-6.438-8.008a10 10 0 0 0-8.328-3.719l-10.209.546a10 10 0 0 1-10.2-7.419l-2.66-10.018a10 10 0 0 0-6.072-6.765l-9.61-3.7a10 10 0 0 1-6.284-10.896l1.631-10.299a10 10 0 0 0-2.792-8.621l-7.33-7.359a10 10 0 0 1-1.312-12.49l5.66-8.746a10 10 0 0 0 .943-9.007l-3.728-9.743a10 10 0 0 1 3.878-11.951l8.666-5.649a10 10 0 0 0 4.526-7.865l.534-10.39a10 10 0 0 1 8.422-9.364l10.129-1.605a10 10 0 0 0 7.359-5.364l4.657-9.21a10 10 0 0 1 11.533-5.14l9.856 2.664a10 10 0 0 0 8.93-1.904z"
        />
      </G>
    </Svg>
  )
);
const Shape4 = React.memo(SVGComponent);
Shape4.displayName = 'Shapes.04';
export default Shape4;

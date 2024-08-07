import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape71 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M99.994 200v-15.561C49.058 184.439 0 150.932 0 100h15.55c0-50.932 33.508-100 84.444-100v15.561C150.929 15.561 200 49.068 200 100h-15.549c0 50.932-33.522 100-84.457 100" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape71);
const Memo = memo(ForwardRef);
export default Memo;
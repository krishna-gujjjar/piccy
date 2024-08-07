import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape62 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="m100 0 3.215 92.24 67.496-62.95-62.95 67.496L200 100l-92.239 3.215 62.95 67.496-67.496-62.95L100 200l-3.215-92.239-67.496 62.95 62.95-67.496L0 100l92.24-3.215L29.29 29.29l67.496 62.95z" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape62);
const Memo = memo(ForwardRef);
export default Memo;
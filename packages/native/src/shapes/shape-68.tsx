import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape68 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M139.997 139.994c80.004 80.008-159.998 80.008-79.994 0C-20 220.002-20-19.999 60.003 59.998-20-20 220.001-20 139.997 59.998c80.004-79.997 80.004 160.004 0 79.996" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape68);
const Memo = memo(ForwardRef);
export default Memo;
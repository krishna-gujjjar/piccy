import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape106 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 100H0V0c55.229 0 100 44.772 100 100m100 0V0c-55.228 0-100 44.772-100 100zM100 200H0V100c55.229 0 100 44.772 100 100m0 0h100V100c-55.228 0-100 44.772-100 100" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape106);
const Memo = memo(ForwardRef);
export default Memo;
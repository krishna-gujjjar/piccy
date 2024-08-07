import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape46 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 24.859 66.667 0v66.667H0L24.859 100 0 133.333h66.667V66.667h66.666V0zM175.141 100 200 66.667h-66.667v66.666H66.667V200L100 175.141 133.333 200v-66.667H200z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape46);
const Memo = memo(ForwardRef);
export default Memo;
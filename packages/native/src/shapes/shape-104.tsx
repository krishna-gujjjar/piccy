import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape104 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M44 0H0v150c0 27.614 22.386 50 50 50h44V50C94 22.386 71.614 0 44 0m112 0c-27.614 0-50 22.386-50 50v150h44c27.614 0 50-22.386 50-50V0z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape104);
const Memo = memo(ForwardRef);
export default Memo;
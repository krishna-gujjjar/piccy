import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape50 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 22.714c0-12.15-9.85-22-22-22H22c-12.15 0-22 9.85-22 22v56c0 12.15 9.85 22 22 22h56c12.15 0 22 9.85 22 22v54.572c0 12.15 9.85 22 22 22h56c12.15 0 22-9.85 22-22v-56c0-12.151-9.85-22-22-22h-56c-12.15 0-22-9.85-22-22zM177.286 100c12.15 0 22-9.85 22-22V22c0-12.15-9.85-22-22-22h-56c-12.151 0-22 9.85-22 22v56c0 12.15-9.85 22-22 22H22.714c-12.15 0-22 9.85-22 22v56c0 12.15 9.85 22 22 22h56c12.15 0 22-9.85 22-22v-56c0-12.15 9.85-22 22-22z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape50);
const Memo = memo(ForwardRef);
export default Memo;
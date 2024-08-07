import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape67 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M100 173.738C24.364 236.944-36.944 175.636 26.262 100-36.944 24.364 24.364-36.944 100 26.262c75.621-63.206 136.944-1.898 73.738 73.738 63.206 75.578 1.883 136.944-73.738 73.738" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape67);
const Memo = memo(ForwardRef);
export default Memo;
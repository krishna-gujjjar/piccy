import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape86 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100.387 91.853C96.242 40.435 53.2 0 .714 0c0 52.242 40.061 95.128 91.14 99.613C40.434 103.758 0 146.8 0 199.286c52.242 0 95.128-40.061 99.613-91.139C103.758 159.565 146.8 200 199.286 200c0-52.242-40.061-95.128-91.139-99.613C159.565 96.242 200 53.2 200 .714c-52.242 0-95.128 40.061-99.613 91.14m-.39 8.149.005.001.001-.005h-.005z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape86);
const Memo = memo(ForwardRef);
export default Memo;
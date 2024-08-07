import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape100 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M120 0H80v110c0 11.046-8.954 20-20 20s-20-8.954-20-20V0H0v100c0 55.228 44.772 100 100 100s100-44.772 100-100V0h-40v110c0 11.046-8.954 20-20 20s-20-8.954-20-20z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape100);
const Memo = memo(ForwardRef);
export default Memo;
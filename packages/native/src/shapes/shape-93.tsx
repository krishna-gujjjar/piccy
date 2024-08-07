import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape93 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M188 100c0 48.601-39.399 88-88 88s-88-39.399-88-88 39.399-88 88-88 88 39.399 88 88m12 0c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100m-100 11c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape93);
const Memo = memo(ForwardRef);
export default Memo;
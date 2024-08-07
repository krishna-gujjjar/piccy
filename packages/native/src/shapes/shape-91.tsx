import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape91 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100m0-12c48.601 0 88-39.399 88-88s-39.399-88-88-88-88 39.399-88 88 39.399 88 88 88m0-12c41.974 0 76-34.026 76-76s-34.026-76-76-76-76 34.026-76 76 34.026 76 76 76m0-12c35.346 0 64-28.654 64-64s-28.654-64-64-64-64 28.654-64 64 28.654 64 64 64m52-64c0 28.719-23.281 52-52 52s-52-23.281-52-52 23.281-52 52-52 52 23.281 52 52m-12 0c0 22.091-17.909 40-40 40s-40-17.909-40-40 17.909-40 40-40 40 17.909 40 40" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape91);
const Memo = memo(ForwardRef);
export default Memo;
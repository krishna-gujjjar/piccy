import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape116 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M.002 200 0 199.5c0-25.389 18.737-46.403 43.137-49.967C18.77 146.188 0 125.286 0 100c0-27.614 22.386-50 50-50h.5C22.777 50 .27 27.66.002 0h199.996c-.269 27.66-22.774 50-50.498 50h.5c27.614 0 50 22.386 50 50 0 25.286-18.77 46.188-43.137 49.533C181.263 153.097 200 174.111 200 199.5l-.002.5z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape116);
const Memo = memo(ForwardRef);
export default Memo;
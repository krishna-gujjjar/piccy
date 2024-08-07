import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape118 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 50c0-27.614-22.386-50-50-50 0 27.61 22.38 49.994 49.988 50C72.379 50.007 50 72.39 50 100c0-27.614-22.386-50-50-50 0 27.614 22.386 50 50 50-27.614 0-50 22.386-50 50 27.61 0 49.993-22.378 50-49.986C50.008 127.622 72.39 150 100 150c-27.614 0-50 22.386-50 50 27.614 0 50-22.386 50-50 27.614 0 50-22.386 50-50 0 27.614 22.386 50 50 50 0-27.614-22.386-50-50-50 0-27.614-22.386-50-50-50m50-50c-27.614 0-50 22.386-50 50 27.614 0 50-22.386 50-50m0 200c-27.614 0-50-22.386-50-50 27.614 0 50 22.386 50 50m50-150c0 27.614-22.386 50-50 50 0-27.614 22.386-50 50-50" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape118);
const Memo = memo(ForwardRef);
export default Memo;
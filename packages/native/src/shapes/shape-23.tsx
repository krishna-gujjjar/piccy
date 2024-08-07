import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape23 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M112.548 87.452c9.161-3.92 22.545-6.391 37.452-6.391 27.614 0 50 8.48 50 18.939 0 10.46-22.386 18.939-50 18.939-14.907 0-28.291-2.471-37.452-6.391 3.92 9.161 6.391 22.545 6.391 37.452 0 27.614-8.479 50-18.939 50s-18.94-22.386-18.94-50c0-14.907 2.472-28.291 6.392-37.452-9.16 3.92-22.544 6.391-37.452 6.391-27.614 0-50-8.479-50-18.939s22.386-18.94 50-18.94c14.907 0 28.291 2.472 37.452 6.392-3.92-9.16-6.391-22.544-6.391-37.452 0-27.614 8.48-50 18.939-50 10.46 0 18.939 22.386 18.939 50 0 14.907-2.471 28.291-6.391 37.452" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape23);
const Memo = memo(ForwardRef);
export default Memo;
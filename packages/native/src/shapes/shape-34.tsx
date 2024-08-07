import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape34 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M106.973 87.6c-3.058 5.439-10.888 5.439-13.946 0L50.469 11.921C47.469 6.59 51.323 0 57.442 0h85.116c6.119 0 9.972 6.588 6.973 11.921zM87.6 106.973c5.439-3.058 5.439-10.888 0-13.946L11.921 50.469C6.588 47.469 0 51.323 0 57.44v85.117c0 6.119 6.588 9.972 11.921 6.973zm19.373 5.427c-3.058-5.439-10.888-5.438-13.946 0l-42.558 75.679c-3 5.333.854 11.921 6.973 11.921h85.116c6.119 0 9.972-6.589 6.973-11.921zm5.427-19.373c-5.439 3.058-5.439 10.888 0 13.946l75.679 42.558c5.333 2.999 11.921-.854 11.921-6.973V57.442c0-6.118-6.589-9.972-11.921-6.973z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape34);
const Memo = memo(ForwardRef);
export default Memo;
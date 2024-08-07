import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape53 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M29.29 29.29C19.265 39.312 15.645 53.314 18.43 66.211 7.34 73.364 0 85.825 0 100s7.341 26.636 18.43 33.788c-2.784 12.897.836 26.899 10.86 36.923 10.023 10.023 24.025 13.643 36.922 10.86C73.364 192.659 85.825 200 100 200s26.636-7.341 33.788-18.429c12.897 2.783 26.899-.837 36.923-10.86 10.023-10.024 13.643-24.026 10.86-36.923C192.659 126.636 200 114.175 200 100s-7.341-26.636-18.429-33.788c2.783-12.897-.837-26.9-10.86-36.923s-24.026-13.643-36.923-10.86C126.636 7.341 114.175 0 100 0S73.364 7.341 66.212 18.43c-12.897-2.784-26.9.836-36.923 10.86" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape53);
const Memo = memo(ForwardRef);
export default Memo;
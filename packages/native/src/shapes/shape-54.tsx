import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape54 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M18.43 66.212c-2.784-12.897.836-26.9 10.86-36.923s24.025-13.643 36.922-10.86C73.364 7.341 85.825 0 100 0s26.636 7.341 33.788 18.43c12.897-2.784 26.899.836 36.923 10.86 10.023 10.023 13.643 24.025 10.86 36.922C192.659 73.364 200 85.825 200 100s-7.341 26.636-18.429 33.788c2.783 12.897-.837 26.899-10.86 36.923-10.024 10.023-24.026 13.643-36.923 10.86C126.636 192.659 114.175 200 100 200s-26.636-7.341-33.788-18.429c-12.897 2.783-26.9-.837-36.923-10.86s-13.643-24.026-10.86-36.923C7.341 126.636 0 114.175 0 100s7.341-26.636 18.43-33.788m53.026 62.283c15.69 15.689 41.128 15.689 56.818 0s15.69-41.129 0-56.819-41.129-15.69-56.818 0-15.69 41.129 0 56.819" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape54);
const Memo = memo(ForwardRef);
export default Memo;
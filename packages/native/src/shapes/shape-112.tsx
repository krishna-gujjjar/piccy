import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape112 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M0 200V0h200v200H0m100-50.027c.015-27.602 22.395-49.973 50-49.973-27.614 0-50-22.386-50-50 0 27.614-22.386 50-50 50 27.605 0 49.985 22.371 50 49.973M50 126c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24m24-76c0 13.255-10.745 24-24 24S26 63.255 26 50s10.745-24 24-24 24 10.745 24 24m52 100c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24m0-100c0 13.255 10.745 24 24 24s24-10.745 24-24-10.745-24-24-24-24 10.745-24 24" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 200V0h200v200z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape112);
const Memo = memo(ForwardRef);
export default Memo;
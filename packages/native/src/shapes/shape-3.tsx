import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape3 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M89.932 6.129c4.225-8.172 15.911-8.172 20.136 0l26.905 52.035a11.33 11.33 0 0 0 4.863 4.863l52.035 26.905c8.172 4.225 8.172 15.911 0 20.136l-52.035 26.905a11.33 11.33 0 0 0-4.863 4.863l-26.905 52.035c-4.225 8.172-15.911 8.172-20.136 0l-26.905-52.035a11.33 11.33 0 0 0-4.863-4.863L6.13 110.068c-8.172-4.225-8.172-15.911 0-20.136l52.035-26.905a11.34 11.34 0 0 0 4.863-4.863z" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape3);
const Memo = memo(ForwardRef);
export default Memo;
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape9 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M100.254 200c-3.154 0-5.82-2.284-6.584-5.344q-3.652-14.63-13.983-31.114-12.24-19.792-34.895-36.719-19.706-14.894-39.41-20.312C2.27 105.656 0 102.897 0 99.671c0-3.164 2.183-5.892 5.225-6.76Q24.545 87.395 42.448 75 63.02 60.677 76.823 40.625q12.21-17.862 16.763-35.333C94.382 2.241 97.068 0 100.221 0c3.188 0 5.893 2.29 6.669 5.383q2.628 10.473 8.214 21.44 7.032 13.541 17.969 26.042 11.198 12.24 25 22.135 18.036 12.785 36.671 17.964c3.048.847 5.256 3.56 5.256 6.723 0 3.211-2.275 5.947-5.371 6.796q-11.813 3.239-24.316 10.444-15.105 8.854-28.126 21.094-13.02 11.979-21.354 25.26-10.35 16.517-13.996 31.358c-.754 3.069-3.424 5.361-6.583 5.361" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape9);
const Memo = memo(ForwardRef);
export default Memo;
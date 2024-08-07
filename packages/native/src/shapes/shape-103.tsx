import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape103 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><Path fill="currentColor" fillRule="evenodd" d="M64 0h135v135h-8.804V67.5c0-32.417-26.279-58.696-58.696-58.696S72.804 35.084 72.804 67.5V135H64zm72 65v135H1V65h8.804v67.5c0 32.417 26.28 58.696 58.696 58.696 32.417 0 58.696-26.279 58.696-58.696V65z" clipRule="evenodd" /></Svg>;
const ForwardRef = forwardRef(Shape103);
const Memo = memo(ForwardRef);
export default Memo;
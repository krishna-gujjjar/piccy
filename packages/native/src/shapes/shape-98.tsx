import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape98 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><Path fill="currentColor" fillRule="evenodd" d="M32 100.641c0-32.25 22.165-59.29 52-66.53V1.28C36.377 8.99 0 50.54 0 100.641S36.377 192.293 84 200v-32.829c-29.835-7.241-52-34.281-52-66.53m168 0c0 50.101-36.377 91.652-84 99.359v-32.829c29.835-7.241 52-34.281 52-66.53s-22.165-59.29-52-66.53V1.28c47.623 7.708 84 49.258 84 99.36" clipRule="evenodd" /></Svg>;
const ForwardRef = forwardRef(Shape98);
const Memo = memo(ForwardRef);
export default Memo;
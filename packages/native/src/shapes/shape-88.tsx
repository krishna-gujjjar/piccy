import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape88 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><Path fill="currentColor" fillRule="evenodd" d="M169.909 139.373c-8.173-9.433-9.501-24.163-4.077-35.403C170.425 94.452 173 83.777 173 72.5 173 32.46 140.541 0 100.5 0S28 32.46 28 72.5c0 11.022 2.46 21.47 6.86 30.824 5.312 11.293 3.84 26.01-4.425 35.362-10.252 11.602-17.641 25.792-21.063 41.465C7.016 190.942 16.194 200 27.24 200h145.263c11.046 0 20.225-9.057 17.869-19.849-3.355-15.365-10.523-29.306-20.463-40.778" clipRule="evenodd" /></Svg>;
const ForwardRef = forwardRef(Shape88);
const Memo = memo(ForwardRef);
export default Memo;
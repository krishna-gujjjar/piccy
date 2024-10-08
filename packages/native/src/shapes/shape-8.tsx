import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape8 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M107.143 0H92.857v63.253L69.162 4.606 55.917 9.957l24.308 60.167L34.34 24.239 24.24 34.34l43.979 43.98-56.994-24.902-5.72 13.09 60.307 26.35H0v14.285h65.81L5.505 133.491l5.72 13.091 56.993-24.901-43.98 43.979 10.102 10.101 45.885-45.885-24.308 60.167 13.245 5.351 23.695-58.647V200h14.286v-63.253l23.695 58.647 13.245-5.351-24.308-60.167 45.885 45.885 10.101-10.101-43.979-43.979 56.994 24.901 5.719-13.091-60.305-26.348H200V92.857h-65.811l60.306-26.348-5.719-13.09-56.994 24.9 43.979-43.979-10.101-10.102-45.885 45.886 24.308-60.167-13.245-5.351-23.695 58.647z" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape8);
const Memo = memo(ForwardRef);
export default Memo;
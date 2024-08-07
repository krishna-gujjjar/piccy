import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape82 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M99.994 183.711C106.781 191.856 113.567 200 127.14 200c31.244 0 40.269-41.556 40.281-72.844 0-13.572 8.144-20.358 16.289-27.144C191.855 93.225 200 86.439 200 72.868c0-31.254-41.616-40.29-72.849-40.29-13.572 0-20.359-8.145-27.145-16.29C93.219 8.145 86.433 0 72.86 0 41.605 0 32.568 41.614 32.568 72.845c0 13.572-8.142 20.358-16.284 27.144S0 113.56 0 127.133c0 31.253 41.605 40.29 72.849 40.29 13.572 0 20.359 8.144 27.145 16.288M100 137c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.566-37 37 16.566 37 37 37" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape82);
const Memo = memo(ForwardRef);
export default Memo;
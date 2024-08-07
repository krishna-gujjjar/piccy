import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape75 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M165.219 191.946c.4 4.435-10.687 10.089-14.175 7.32-30.036-23.837-72.026-23.843-102.069-.019-3.49 2.767-14.59-2.896-14.19-7.331 1.832-20.394-6.307-28.533-26.701-26.701-4.436.399-10.099-10.702-7.332-14.191 23.824-30.041 23.818-72.026-.02-102.06-2.768-3.488 2.886-14.576 7.321-14.177 20.417 1.839 28.565-6.3 26.731-26.703C34.386 3.648 45.486-2.015 48.975.752c30.043 23.825 72.033 23.818 102.069-.02 3.488-2.768 14.575 2.886 14.175 7.321-1.84 20.426 6.306 28.573 26.727 26.734 4.435-.4 10.089 10.688 7.321 14.176-23.831 30.034-23.838 72.021-.019 102.061 2.767 3.49-2.896 14.59-7.332 14.191-20.399-1.832-28.536 6.316-26.697 26.731" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape75);
const Memo = memo(ForwardRef);
export default Memo;
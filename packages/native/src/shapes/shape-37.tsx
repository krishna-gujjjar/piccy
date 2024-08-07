import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape37 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><Path fill="currentColor" d="M0 47.424c0-9.4 6.536-17.518 15.77-19.275C36.483 24.209 73.342 18 100 18s63.517 6.208 84.23 10.149c9.234 1.757 15.77 9.875 15.77 19.274v102.951c0 9.05-6.069 16.959-14.88 19.022-20.437 4.785-57.769 12.538-85.12 12.538s-64.683-7.753-85.12-12.538C6.069 167.333 0 159.424 0 150.374z" /></Svg>;
const ForwardRef = forwardRef(Shape37);
const Memo = memo(ForwardRef);
export default Memo;
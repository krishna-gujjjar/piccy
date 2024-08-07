import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape6 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M71.558 16.335c12.778-21.78 44.267-21.78 57.045 0l.464.79a33.07 33.07 0 0 0 28.291 16.335l.918.006c25.251.177 40.995 27.446 28.522 49.403l-.453.797a33.07 33.07 0 0 0 0 32.668l.453.797c12.473 21.957-3.271 49.226-28.522 49.403l-.918.006a33.07 33.07 0 0 0-28.291 16.334l-.464.791c-12.778 21.78-44.267 21.78-57.045 0l-.464-.791a33.07 33.07 0 0 0-28.291-16.334l-.917-.006c-25.251-.177-40.995-27.446-28.523-49.403l.453-.797a33.07 33.07 0 0 0 0-32.668l-.453-.797C.89 60.912 16.635 33.643 41.886 33.466l.917-.006a33.07 33.07 0 0 0 28.29-16.334z" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape6);
const Memo = memo(ForwardRef);
export default Memo;
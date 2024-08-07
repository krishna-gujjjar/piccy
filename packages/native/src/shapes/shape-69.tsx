import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape69 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M100.019 138.694C14.564 254.761-54.717 185.48 61.329 99.997-54.77 14.527 14.51-54.728 100.018 61.312c85.454-116.08 154.735-46.786 38.69 38.685 115.992 85.483 46.711 154.764-38.69 38.697" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape69);
const Memo = memo(ForwardRef);
export default Memo;
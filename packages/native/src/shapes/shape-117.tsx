import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape117 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M99.998 0H38C17.013 0 0 17.013 0 38v124c0 20.987 17.013 38 38 38h61.998l.002-.5.002.5H162c20.987 0 38-17.013 38-38V38c0-20.987-17.013-38-38-38h-61.998c.269 27.66 22.774 50 50.498 50h-.5c-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50h-.5c27.724 0 50.23-22.34 50.498-50M100 100c0 25.286-18.77 46.188-43.137 49.533C81.263 153.097 100 174.111 100 199.5c0-25.389 18.737-46.403 43.137-49.967C118.77 146.188 100 125.286 100 100" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape117);
const Memo = memo(ForwardRef);
export default Memo;
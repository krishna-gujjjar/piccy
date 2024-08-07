import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape66 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M100 0c.014 36.893 44.613 55.367 70.711 29.29C144.633 55.386 163.107 99.985 200 100c-36.893.014-55.367 44.613-29.289 70.711C144.613 144.633 100.014 163.107 100 200c-.014-36.893-44.613-55.367-70.71-29.289C55.366 144.613 36.892 100.014 0 100c36.893-.014 55.367-44.613 29.29-70.71C55.386 55.366 99.985 36.892 100 0" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape66);
const Memo = memo(ForwardRef);
export default Memo;
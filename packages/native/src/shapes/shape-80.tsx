import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape80 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M99.678 105.287c0-186.98 45.43-83.985-1.325-3.009 46.745-80.976 158.738-93.149-3.262.36 161.961-93.49 95.437-2.649 1.948-2.649 93.489 0 160.023 90.87-1.948-2.649 161.961 93.49 50.017 81.346 3.262.36 46.745 80.986 1.325 184.059 1.325-2.999 0 186.98-45.44 83.985 1.315 3-46.745 80.985-158.738 93.158 3.262-.36-161.961 93.489-95.437 2.648-1.948 2.648-93.49 0-160.023-90.86 1.948 2.649-161.961-93.49-50.017-81.336-3.262-.36-46.755-80.976-1.315-184.02-1.315 3.009" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape80);
const Memo = memo(ForwardRef);
export default Memo;
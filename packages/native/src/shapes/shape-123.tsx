import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape123 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M146.371 34.589a24.8 24.8 0 0 0 1.894-9.567 24.993 24.993 0 0 0-42.621-17.728l-5.64 5.253-5.602-5.235a25 25 0 1 0-35.334 35.377l38.48 39.048a3.45 3.45 0 0 0 4.912 0l38.48-39.048a24.8 24.8 0 0 0 5.431-8.1M53.629 165.41a24.8 24.8 0 0 0-1.894 9.567 24.994 24.994 0 0 0 29.82 24.533 25 25 0 0 0 12.8-6.805l5.641-5.253 5.602 5.235a24.999 24.999 0 0 0 42.667-17.703 25 25 0 0 0-7.333-17.674l-38.48-39.048a3.436 3.436 0 0 0-3.787-.761 3.4 3.4 0 0 0-1.125.761l-38.48 39.048a24.8 24.8 0 0 0-5.431 8.1m121.349-17.145a24.85 24.85 0 0 1-17.667-7.326l-39.048-38.479a3.445 3.445 0 0 1 0-4.913l39.048-38.48a25.001 25.001 0 0 1 35.377 35.335l-5.235 5.601 5.253 5.641a24.995 24.995 0 0 1-3.851 38.422 25 25 0 0 1-13.877 4.199M34.588 53.628a24.8 24.8 0 0 0-9.566-1.894A24.993 24.993 0 0 0 7.294 94.355l5.253 5.64-5.235 5.602a25.002 25.002 0 0 0 17.704 42.668 25 25 0 0 0 17.673-7.334l39.048-38.479a3.446 3.446 0 0 0 0-4.913L42.69 59.06a24.8 24.8 0 0 0-8.1-5.431" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape123);
const Memo = memo(ForwardRef);
export default Memo;
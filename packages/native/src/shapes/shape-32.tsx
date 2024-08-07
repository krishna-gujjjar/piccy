import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape32 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M0 158.405c46.157-14.588 56.186-4.56 41.598 41.595 26.955-46.155 89.849-46.155 116.805 0-14.579-46.155-4.549-56.183 41.597-41.595-46.146-26.955-46.146-89.845 0-116.8-46.146 14.578-56.176 4.55-41.597-41.605-26.956 46.155-89.85 46.155-116.805 0C56.186 46.155 46.158 56.183 0 41.606 46.157 68.56 46.157 131.45 0 158.405M100 137c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.566-37 37 16.566 37 37 37" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape32);
const Memo = memo(ForwardRef);
export default Memo;
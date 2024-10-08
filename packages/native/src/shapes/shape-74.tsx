import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape74 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M158.403 200c-26.956-46.155-89.85-46.155-116.805 0 14.588-46.155 4.56-56.183-41.598-41.595 46.157-26.955 46.157-89.845 0-116.8C46.157 56.184 56.186 46.156 41.598 0c26.955 46.155 89.849 46.155 116.805 0-14.579 46.155-4.549 56.183 41.597 41.606-46.146 26.954-46.146 89.844 0 116.799-46.146-14.588-56.176-4.56-41.597 41.595" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape74);
const Memo = memo(ForwardRef);
export default Memo;
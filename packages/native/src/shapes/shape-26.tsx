import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape26 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M100 100s12.5-33.473 12.5-57.143S106.904 0 100 0 87.5 19.188 87.5 42.857C87.5 66.527 100 100 100 100m0 0s14.831 32.508 31.567 49.245 34.262 26.347 39.144 21.466-4.729-22.407-21.466-39.144S100 100 100 100m0 0s33.474-12.5 57.143-12.5S200 93.096 200 100s-19.188 12.5-42.857 12.5S100 100 100 100m0 0s-32.508 14.831-49.245 31.567-26.347 34.262-21.466 39.144 22.407-4.729 39.144-21.466S100 100 100 100m0 0c.028.074 12.5 33.5 12.5 57.143 0 23.669-5.596 42.857-12.5 42.857s-12.5-19.188-12.5-42.857S100 100 100 100m0 0S66.527 87.5 42.857 87.5 0 93.096 0 100s19.188 12.5 42.857 12.5C66.527 112.5 100 100 100 100m0 0s32.508-14.83 49.245-31.567 26.347-34.262 21.466-39.144-22.407 4.73-39.144 21.466S100 100 100 100M68.433 50.755C85.169 67.492 100 100 100 100S67.492 85.17 50.755 68.433 24.408 34.17 29.29 29.289s22.407 4.73 39.144 21.466" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape26);
const Memo = memo(ForwardRef);
export default Memo;
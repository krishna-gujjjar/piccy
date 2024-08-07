import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape119 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="m75.55 178.786-.001.001-12.635-12.635Q63 167.315 63 168.5c0 17.397-14.103 31.5-31.5 31.5S0 185.897 0 168.5 14.103 137 31.5 137q1.185 0 2.348.086l-12.985-12.985.002-.003C7.958 110.931 0 92.895 0 73 0 32.683 32.683 0 73 0c19.895 0 37.931 7.958 51.098 20.865l.002-.002.391.39.256.256 12.339 12.34A32 32 0 0 1 137 31.5C137 14.103 151.103 0 168.5 0S200 14.103 200 31.5 185.897 63 168.5 63q-1.185-.001-2.349-.086l12.341 12.34.253.254.041.041C191.898 88.746 200 106.927 200 127c0 40.317-32.683 73-73 73-20.073 0-38.254-8.102-51.45-21.214" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape119);
const Memo = memo(ForwardRef);
export default Memo;
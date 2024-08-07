import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape79 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="M99.64 68.482c0-133.91 41.361-40.122 7.881 17.87 33.48-57.992 135.388-69.068 19.414-2.108 115.974-66.96 55.438 15.75-11.533 15.75 66.949 0 127.507 82.712 11.533 15.762 115.974 66.95 14.066 55.873-19.414-2.119 33.48 57.992-7.881 151.79-7.881 17.87 0 133.92-41.307 40.122-7.881-17.87-33.47 57.992-135.377 69.069-19.403 2.119-115.974 66.95-55.438-15.761 11.533-15.761-66.96 0-127.507-82.711-11.533-15.751-115.974-66.96-14.066-55.884 19.403 2.109-33.47-57.993 7.88-151.78 7.88-17.871" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape79);
const Memo = memo(ForwardRef);
export default Memo;
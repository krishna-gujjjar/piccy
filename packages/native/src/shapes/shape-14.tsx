import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape14 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><Path fill="currentColor" fillRule="evenodd" d="M128.603 16.335c-12.778-21.78-44.267-21.78-57.045 0l-.464.79A33.07 33.07 0 0 1 42.803 33.46l-.917.006C16.635 33.643.89 60.912 13.363 82.869l.453.797a33.07 33.07 0 0 1 0 32.668l-.453.797c-12.472 21.957 3.272 49.226 28.523 49.403l.917.006a33.07 33.07 0 0 1 28.29 16.334l.465.791c12.778 21.78 44.267 21.78 57.045 0l.464-.791a33.07 33.07 0 0 1 28.291-16.334l.918-.006c25.251-.177 40.995-27.446 28.522-49.403l-.453-.797a33.07 33.07 0 0 1 0-32.668l.453-.797c12.473-21.957-3.271-49.226-28.522-49.403l-.918-.006a33.07 33.07 0 0 1-28.291-16.334zm-28.522 133.269c27.395 0 49.604-22.208 49.604-49.604s-22.209-49.604-49.604-49.604c-27.396 0-49.605 22.208-49.605 49.604s22.209 49.604 49.605 49.604" clipRule="evenodd" /></Svg>;
const ForwardRef = forwardRef(Shape14);
const Memo = memo(ForwardRef);
export default Memo;
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape61 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" d="m100 0 1.384 87.067c.056 3.502 4.267 5.246 6.783 2.81l62.544-60.588-60.587 62.545c-2.437 2.515-.693 6.726 2.809 6.782L200 100l-87.067 1.384c-3.502.056-5.246 4.267-2.809 6.783l60.587 62.544-62.544-60.587c-2.516-2.437-6.727-.693-6.783 2.809L100 200l-1.384-87.067c-.056-3.502-4.267-5.246-6.782-2.809l-62.545 60.587 60.587-62.544c2.437-2.516.693-6.727-2.81-6.783L0 100l87.067-1.384c3.502-.056 5.246-4.267 2.81-6.782L29.288 29.289l62.545 60.587c2.515 2.437 6.726.693 6.782-2.81z" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape61);
const Memo = memo(ForwardRef);
export default Memo;
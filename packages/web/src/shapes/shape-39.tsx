import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape39 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M200 150c0-55.228-44.772-100-100-100S0 94.772 0 150z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Shape39);
const Memo = memo(ForwardRef);
export default Memo;
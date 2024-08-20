import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape38 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" d="M0 45.736 50 33l50 12.736L150 33l50 12.736V168l-50-12.736L100 168l-50-12.736L0 168z" /></svg>;
const ForwardRef = forwardRef(Shape38);
const Memo = memo(ForwardRef);
export default Memo;
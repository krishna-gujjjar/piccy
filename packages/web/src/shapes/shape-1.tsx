import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape1 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" d="m100 0 24.1 58.258L186.603 50 148.2 100l38.403 50-62.503-8.258L100 200l-24.1-58.258L13.397 150 51.8 100 13.398 50 75.9 58.258z" /></svg>;
const ForwardRef = forwardRef(Shape1);
const Memo = memo(ForwardRef);
export default Memo;
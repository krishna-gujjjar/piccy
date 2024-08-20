import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape89 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M0 0h100c55.228 0 100 44.772 100 100v100H100C44.772 200 0 155.228 0 100z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape89);
const Memo = memo(ForwardRef);
export default Memo;
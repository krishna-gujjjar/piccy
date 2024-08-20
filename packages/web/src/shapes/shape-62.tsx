import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape62 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="m100 0 3.215 92.24 67.496-62.95-62.95 67.496L200 100l-92.239 3.215 62.95 67.496-67.496-62.95L100 200l-3.215-92.239-67.496 62.95 62.95-67.496L0 100l92.24-3.215L29.29 29.29l67.496 62.95z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape62);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape42 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M200 99.588s-44.772 50.588-100 50.588S0 99.588 0 99.588 44.772 49 100 49s100 50.588 100 50.588" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape42);
const Memo = memo(ForwardRef);
export default Memo;
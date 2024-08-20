import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape59 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M100 200c-2.895-94.738-5.262-97.09-100-100 94.738-2.895 97.09-5.262 100-100 2.895 94.738 5.262 97.09 100 100-94.738 2.91-97.09 5.233-100 100" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape59);
const Memo = memo(ForwardRef);
export default Memo;
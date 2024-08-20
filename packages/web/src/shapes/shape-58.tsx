import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape58 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="m100 0 5.94 94.06L200 100l-94.06 5.94L100 200l-5.94-94.06L0 100l94.06-5.94z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape58);
const Memo = memo(ForwardRef);
export default Memo;
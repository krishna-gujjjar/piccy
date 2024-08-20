import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape121 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 0H0l100 100H0l100 100h100L100 100h100z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape121);
const Memo = memo(ForwardRef);
export default Memo;
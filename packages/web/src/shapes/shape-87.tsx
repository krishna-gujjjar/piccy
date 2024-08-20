import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape87 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M99.976 100C44.759 99.987 0 55.22 0 0h200c0 55.22-44.758 99.987-99.976 100 55.218.013 99.976 44.78 99.976 100H0c0-55.22 44.759-99.987 99.976-100" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape87);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape48 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 22c0-12.15-9.85-22-22-22H22C9.85 0 0 9.85 0 22v56.72c0 12.15 9.85 21.999 22 21.999h56c12.15 0 22 9.85 22 22V178c0 12.15 9.85 22 22 22h56c12.15 0 22-9.85 22-22v-56.72c0-12.15-9.85-22-22-22h-56c-12.15 0-22-9.85-22-22z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape48);
const Memo = memo(ForwardRef);
export default Memo;
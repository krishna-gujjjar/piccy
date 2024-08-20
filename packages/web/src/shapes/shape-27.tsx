import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape27 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 0H0v100h100v100h100V100H100z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape27);
const Memo = memo(ForwardRef);
export default Memo;
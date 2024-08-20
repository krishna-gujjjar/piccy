import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape102 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M50 0h150v150l-50 50V50H0zM0 165.067V100h65.067zM100 200H35.778L100 135.778z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape102);
const Memo = memo(ForwardRef);
export default Memo;
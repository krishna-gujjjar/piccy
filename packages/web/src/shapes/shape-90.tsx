import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape90 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 0h100C44.772 0 0 44.772 0 100zm100 200H0V100c0 55.228 44.772 100 100 100m100-100v100H100c55.228 0 100-44.772 100-100m0 0V0H100c55.228 0 100 44.772 100 100m-100 11c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape90);
const Memo = memo(ForwardRef);
export default Memo;
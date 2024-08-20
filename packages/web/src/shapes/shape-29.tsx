import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape29 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 0h66.667v66.667H0zm133.333 66.667H66.667v66.666H0V200h66.667v-66.667h66.666V200H200v-66.667h-66.667zm0 0H200V0h-66.667z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape29);
const Memo = memo(ForwardRef);
export default Memo;
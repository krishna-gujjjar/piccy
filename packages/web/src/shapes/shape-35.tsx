import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape35 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M156.064 143.936 112.127 100l43.937-43.936L200 100zm-112.128 0L0 100l43.936-43.936L87.873 100zM100 200l-43.936-43.936L100 112.127l43.936 43.937zm0-112.127L56.064 43.936 100 0l43.936 43.936z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape35);
const Memo = memo(ForwardRef);
export default Memo;
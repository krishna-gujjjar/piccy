import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape33 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M135.714 0H64.286v64.286H0v71.428h64.286V200h71.428v-64.286H200V64.286h-64.286z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape33);
const Memo = memo(ForwardRef);
export default Memo;
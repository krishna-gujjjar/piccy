import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape47 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M162.963 37.037 100 0 37.037 37.037 0 100l37.037 62.963V37.037zM37.037 162.963 100 200l62.963-37.037L200 100l-37.037-62.963v125.926z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape47);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape21 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 200c55.228 0 100-44.772 100-100S155.228 0 100 0 0 44.772 0 100s44.772 100 100 100m0-56.25c24.162 0 43.75-19.588 43.75-43.75S124.162 56.25 100 56.25 56.25 75.838 56.25 100s19.588 43.75 43.75 43.75" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape21);
const Memo = memo(ForwardRef);
export default Memo;
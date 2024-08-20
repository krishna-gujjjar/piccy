import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape120 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M50 0H0v100c0 55.228 44.772 100 100 100s100-44.772 100-100V0h-50c-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape120);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape110 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 0c55.228 0 100 44.772 100 100s-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0m0 0c38.108 0 69 30.892 69 69s-30.892 69-69 69-69-30.892-69-69S61.892 0 100 0m32 69c0-17.673-14.327-32-32-32S68 51.327 68 69s14.327 32 32 32 32-14.327 32-32" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 200V0h200v200z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape110);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape122 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 0v50l100 50L0 150v50l100-50v50l100-50V50L100 0v50zm100 50v100l100-50z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape122);
const Memo = memo(ForwardRef);
export default Memo;
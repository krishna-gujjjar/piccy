import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape104 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M44 0H0v150c0 27.614 22.386 50 50 50h44V50C94 22.386 71.614 0 44 0m112 0c-27.614 0-50 22.386-50 50v150h44c27.614 0 50-22.386 50-50V0z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape104);
const Memo = memo(ForwardRef);
export default Memo;
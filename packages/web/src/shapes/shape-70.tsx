import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape70 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M99.995 200v-56.031L0 99.995h56.031L99.995 0v56.031L200 99.995h-56.031z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape70);
const Memo = memo(ForwardRef);
export default Memo;
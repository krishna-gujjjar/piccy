import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape77 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M123.344 200C100 200 100 143.969 76.656 143.969 49.787 143.969 0 150.205 0 123.338c0-23.343 56.024-23.343 56.024-46.686C56.024 49.795 49.787 0 76.656 0 100 0 100 56.031 123.344 56.031c26.869 0 76.656-6.236 76.656 20.621 0 23.343-56.034 23.343-56.034 46.686 0 26.867 6.247 76.662-20.622 76.662" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape77);
const Memo = memo(ForwardRef);
export default Memo;
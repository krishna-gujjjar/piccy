import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape72 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M135.553 160.869c30.47 52.175-101.564 52.175-71.094 0-56.444 52.175-77.503 31.092-25.328-25.316-52.175 30.47-52.175-101.564 0-71.094C-13.044 8.015 8.04-13.044 64.46 39.131c-30.47-52.175 101.564-52.175 71.094 0 56.444-52.175 77.491-31.092 25.316 25.328 52.175-30.47 52.175 101.564 0 71.094 52.175 56.432 31.128 77.491-25.316 25.316" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape72);
const Memo = memo(ForwardRef);
export default Memo;
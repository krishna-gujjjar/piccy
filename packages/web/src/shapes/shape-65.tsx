import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape65 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="m100 0 2.039 58.495c.459 13.187 16.218 19.715 25.868 10.715l42.804-39.92-39.921 42.803c-9 9.65-2.472 25.409 10.715 25.868L200 100l-58.495 2.039c-13.187.459-19.715 16.218-10.715 25.868l39.921 42.804-42.804-39.921c-9.65-9-25.409-2.472-25.868 10.715L100 200l-2.038-58.495c-.46-13.187-16.22-19.715-25.869-10.715L29.29 170.711l39.921-42.804c9-9.65 2.472-25.409-10.715-25.868L0 100l58.495-2.038c13.187-.46 19.715-16.22 10.715-25.869L29.29 29.29 72.092 69.21c9.65 9 25.409 2.472 25.868-10.715z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape65);
const Memo = memo(ForwardRef);
export default Memo;
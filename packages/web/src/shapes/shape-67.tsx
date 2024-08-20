import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape67 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M100 173.738C24.364 236.944-36.944 175.636 26.262 100-36.944 24.364 24.364-36.944 100 26.262c75.621-63.206 136.944-1.898 73.738 73.738 63.206 75.578 1.883 136.944-73.738 73.738" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape67);
const Memo = memo(ForwardRef);
export default Memo;
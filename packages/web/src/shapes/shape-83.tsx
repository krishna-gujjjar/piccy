import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape83 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M26.262 100c-63.206 75.636-1.898 136.944 73.738 73.738 75.621 63.206 136.944 1.84 73.738-73.738C236.944 24.364 175.621-36.944 100 26.262 24.364-36.944-36.944 24.364 26.262 100M100 137c20.435 0 37-16.565 37-37s-16.565-37-37-37-37 16.566-37 37 16.566 37 37 37" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape83);
const Memo = memo(ForwardRef);
export default Memo;
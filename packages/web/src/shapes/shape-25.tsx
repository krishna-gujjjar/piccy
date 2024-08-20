import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape25 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M100 100s12.5-33.473 12.5-57.143S106.904 0 100 0 87.5 19.188 87.5 42.857C87.5 66.527 100 100 100 100m0 0s33.474-12.5 57.143-12.5S200 93.096 200 100s-19.188 12.5-42.857 12.5c-23.648 0-57.081-12.477-57.143-12.5m0 0s-12.5 33.474-12.5 57.143S93.096 200 100 200s12.5-19.188 12.5-42.857c0-23.648-12.477-57.081-12.5-57.143m0 0s-33.473 12.5-57.143 12.5S0 106.904 0 100s19.188-12.5 42.857-12.5C66.527 87.5 100 100 100 100" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape25);
const Memo = memo(ForwardRef);
export default Memo;
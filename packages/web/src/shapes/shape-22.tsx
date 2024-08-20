import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape22 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M50 100c27.614 0 50-22.386 50-50 0 27.614 22.386 50 50 50-27.614 0-50 22.386-50 50 0-27.614-22.386-50-50-50m0 0c-27.614 0-50 22.386-50 50s22.386 50 50 50 50-22.386 50-50c0 27.614 22.386 50 50 50s50-22.386 50-50-22.386-50-50-50c27.614 0 50-22.386 50-50S177.614 0 150 0s-50 22.386-50 50c0-27.614-22.386-50-50-50S0 22.386 0 50s22.386 50 50 50" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape22);
const Memo = memo(ForwardRef);
export default Memo;
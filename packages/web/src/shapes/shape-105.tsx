import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape105 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M50 0H0v100h50c-27.614 0-50 22.386-50 50v50h100v-50c0 27.614 22.386 50 50 50h50V100h-50c27.614 0 50-22.386 50-50V0H100v50c0-27.614-22.386-50-50-50m50 100H50c27.614 0 50 22.386 50 50zm0 0V50c0 27.614 22.386 50 50 50z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape105);
const Memo = memo(ForwardRef);
export default Memo;
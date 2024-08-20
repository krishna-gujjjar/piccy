import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape109 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M200 50V0H100v49.98C99.99 22.375 77.608 0 50 0H0v100h50c-27.614 0-50 22.386-50 50v50h100v-50c0 27.614 22.386 50 50 50h50V100h-49.98C177.625 99.99 200 77.608 200 50" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape109);
const Memo = memo(ForwardRef);
export default Memo;
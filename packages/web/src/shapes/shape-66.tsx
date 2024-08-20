import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape66 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M100 0c.014 36.893 44.613 55.367 70.711 29.29C144.633 55.386 163.107 99.985 200 100c-36.893.014-55.367 44.613-29.289 70.711C144.613 144.633 100.014 163.107 100 200c-.014-36.893-44.613-55.367-70.71-29.289C55.366 144.613 36.892 100.014 0 100c36.893-.014 55.367-44.613 29.29-70.71C55.386 55.366 99.985 36.892 100 0" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape66);
const Memo = memo(ForwardRef);
export default Memo;
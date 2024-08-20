import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape28 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 0h50v50H0zm100 50H50v50H0v50h50v50h50v-50h50v50h50v-50h-50v-50h50V50h-50V0h-50zm0 50h50V50h-50zm0 0v50H50v-50z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape28);
const Memo = memo(ForwardRef);
export default Memo;
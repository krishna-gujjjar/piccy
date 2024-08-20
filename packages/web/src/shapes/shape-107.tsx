import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape107 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 100V0h200v100c-55.22 0-99.987-44.758-100-99.976C99.987 55.242 55.22 100 0 100m100 100c0-55.229 44.772-100 100-100v100zm0 0c0-55.229-44.771-100-100-100v100z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape107);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape20 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M199.06 140.014c.545 5.496-3.985 9.986-9.508 9.986h-36.25c-5.523 0-9.882-4.537-11.129-9.917-4.492-19.385-21.869-33.833-42.62-33.833-20.752 0-38.13 14.448-42.622 33.833-1.247 5.38-5.606 9.917-11.129 9.917H9.552C4.03 150-.5 145.51.045 140.014 5.055 89.474 47.694 50 99.552 50s94.497 39.474 99.508 90.014" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Shape20);
const Memo = memo(ForwardRef);
export default Memo;
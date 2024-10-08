import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape63 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="m100 0 1.459 91.728L134.202 6.03 104.2 92.725l60.079-69.33-57.844 71.206L186.603 50l-78.71 47.127 90.588-14.492L108.4 100l90.081 17.365-90.588-14.492L186.603 150l-80.168-44.601 57.844 71.205-60.079-69.329 30.002 86.694-32.743-85.697L100 200l-1.459-91.728-32.743 85.697L95.8 107.275l-60.079 69.329 57.844-71.205L13.398 150l78.709-47.127-90.588 14.492L91.6 100 1.52 82.635l90.587 14.492L13.397 50l80.168 44.6-57.844-71.204L95.8 92.726 65.798 6.03l32.743 85.697z" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape63);
const Memo = memo(ForwardRef);
export default Memo;
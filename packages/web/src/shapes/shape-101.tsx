import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape101 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M90 32V0H0v90h32V54.627L63.132 85.76 77.372 100l-14.24 14.241L32 145.373V110H0v90h90v-32H54.627l31.132-31.132L100 122.627l14.241 14.241L145.373 168H110v32h90v-90h-32v35.373l-31.132-31.132L122.627 100l14.241-14.24L168 54.626V90h32V0h-90v32h35.373l-31.132 31.132L100 77.372l-14.24-14.24L54.626 32z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape101);
const Memo = memo(ForwardRef);
export default Memo;
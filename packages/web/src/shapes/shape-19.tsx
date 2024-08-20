import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape19 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M200 150h-56.25c0-24.162-19.588-43.75-43.75-43.75S56.25 125.838 56.25 150H0C0 94.772 44.772 50 100 50s100 44.772 100 100" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Shape19);
const Memo = memo(ForwardRef);
export default Memo;
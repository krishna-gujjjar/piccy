import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape41 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" d="M170 129.496C170 168.434 138.66 200 100 200s-70-31.566-70-70.504c0-36.857 35.84-81.29 65.113-122.542 2.4-3.381 7.425-3.415 9.861-.06C135.351 48.737 170 92.591 170 129.496" /></svg>;
const ForwardRef = forwardRef(Shape41);
const Memo = memo(ForwardRef);
export default Memo;
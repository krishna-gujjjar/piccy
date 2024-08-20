import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape52 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M122.363 90.35a15 15 0 0 0 0 19.3l38.404 45.699c8.201 9.759 1.264 24.651-11.483 24.651H51.029c-12.747 0-19.684-14.892-11.484-24.651L77.95 109.65a15 15 0 0 0 0-19.3l-38.405-45.7C31.345 34.892 38.282 20 51.03 20h98.255c12.746 0 19.684 14.892 11.483 24.65z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Shape52);
const Memo = memo(ForwardRef);
export default Memo;
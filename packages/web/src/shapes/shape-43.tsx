import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape43 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M100 153.877c41.147 0 76.851-26.337 94.627-42.204 7.162-6.393 7.162-17.076 0-23.469C176.851 72.337 141.147 46 99.999 46 58.852 46 23.148 72.337 5.372 88.204c-7.163 6.393-7.163 17.076 0 23.469 17.776 15.867 53.48 42.204 94.627 42.204m0-16.307c20.783 0 37.631-16.848 37.631-37.632s-16.848-37.631-37.632-37.631-37.631 16.848-37.631 37.631 16.848 37.632 37.631 37.632" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Shape43);
const Memo = memo(ForwardRef);
export default Memo;
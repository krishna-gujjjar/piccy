import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape108 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M0 100V0h100c0 55.229-44.771 100-100 100m200 0C200 44.772 155.228 0 100 0v100H0c0 55.228 44.772 100 100 100h100zm-.039 0H100v100c0-55.215 44.75-99.979 99.961-100" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape108);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape84 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M82.02 130.784c-53.87 92.288 89.903 92.288 35.961 0 82.141 92.288 105.093 69.377 12.798-12.798 92.295 53.87 92.295-89.908 0-35.964 92.295-82.175 69.374-105.097-12.798-12.798 53.868-92.299-89.904-92.299-35.962 0C-.153-23.075-23.074-.153 69.221 82.022c-92.295-53.87-92.295 89.908 0 35.964-92.295 82.175-69.374 105.086 12.798 12.798M100 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape84);
const Memo = memo(ForwardRef);
export default Memo;
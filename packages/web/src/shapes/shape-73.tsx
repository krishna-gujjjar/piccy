import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape73 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M117.981 130.784c53.942 92.288-89.83 92.288-35.962 0-82.172 92.288-105.093 69.377-12.798-12.799-92.295 53.945-92.295-89.833 0-35.963C-23.074-.153-.153-23.075 82.019 69.224c-53.942-92.299 89.83-92.299 35.962 0 82.172-92.299 105.093-69.377 12.798 12.798 92.295-53.944 92.295 89.834 0 35.963 92.295 82.176 69.343 105.087-12.798 12.799" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape73);
const Memo = memo(ForwardRef);
export default Memo;
import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape7 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M107.143 0H92.857v82.756L34.34 24.239 24.24 34.34l58.517 58.517H0v14.286h82.756L24.238 165.66l10.101 10.101 58.517-58.517V200h14.286v-82.756l58.517 58.517 10.101-10.101-58.517-58.517H200V92.857h-82.756l58.517-58.517-10.101-10.102-58.517 58.518z" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape7);
const Memo = memo(ForwardRef);
export default Memo;
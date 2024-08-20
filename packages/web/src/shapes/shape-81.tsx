import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape81 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M61.328 99.997C-54.717 185.48 14.564 254.76 100.02 138.694c85.401 116.067 154.682 46.786 38.69-38.697 116.045-85.47 46.764-154.765-38.69-38.685-85.508-116.04-154.79-46.786-38.69 38.685M100 125c13.807 0 25-11.193 25-25s-11.193-25-25-25-25 11.193-25 25 11.193 25 25 25" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape81);
const Memo = memo(ForwardRef);
export default Memo;
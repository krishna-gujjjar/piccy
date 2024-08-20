import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape69 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M100.019 138.694C14.564 254.761-54.717 185.48 61.329 99.997-54.77 14.527 14.51-54.728 100.018 61.312c85.454-116.08 154.735-46.786 38.69 38.685 115.992 85.483 46.711 154.764-38.69 38.697" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape69);
const Memo = memo(ForwardRef);
export default Memo;
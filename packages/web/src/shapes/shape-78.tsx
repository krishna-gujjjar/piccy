import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape78 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M99.552 18.909c0-54.034 33.764 22.56 20.282 45.957 13.506-23.396 96.734-32.452 49.93-5.429 46.804-27.023-2.648 40.565-29.66 40.565 27.012 0 76.464 67.551 29.66 40.564 46.804 27.023-36.424 17.968-49.93-5.428 13.506 23.396-20.282 99.991-20.282 45.957 0 54.034-33.776-22.561-20.282-45.957-13.506 23.396-96.734 32.451-49.93 5.428-46.804 27.023 2.648-40.564 29.671-40.564-27.023 0-76.475-67.552-29.671-40.565-46.804-27.023 36.424-17.967 49.93 5.429-13.494-23.42 20.282-99.991 20.282-45.957" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape78);
const Memo = memo(ForwardRef);
export default Memo;
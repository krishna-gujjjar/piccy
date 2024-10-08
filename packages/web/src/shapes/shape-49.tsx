import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape49 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M18.405 100.422C8.318 102.425.715 111.325.715 122v56c0 12.15 9.849 22 22 22h56c10.925 0 19.99-7.965 21.707-18.405 2.003 10.087 10.903 17.691 21.578 17.691h56c12.15 0 22-9.85 22-22v-56c0-10.926-7.965-19.992-18.404-21.708 10.086-2.003 17.69-10.903 17.69-21.578V22c0-12.15-9.85-22-22-22h-56c-10.926 0-19.992 7.965-21.708 18.405C97.575 8.318 88.675.715 78 .715H22c-12.15 0-22 9.849-22 22v56c0 10.925 7.965 19.99 18.405 21.707" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape49);
const Memo = memo(ForwardRef);
export default Memo;
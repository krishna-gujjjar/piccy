import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape40 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M124.899 4.917 105.8 85.998l43.827-70.838a4 4 0 0 1 6.23-.724l29.707 29.707a4 4 0 0 1-.724 6.23L114.002 94.2l81.081-19.099A4 4 0 0 1 200 78.995v42.011a4 4 0 0 1-4.917 3.893L114.002 105.8l70.838 43.828a4 4 0 0 1 .724 6.23l-29.707 29.706a4 4 0 0 1-6.23-.724L105.8 114.002l19.099 81.081a4 4 0 0 1-3.893 4.917H78.994a4 4 0 0 1-3.893-4.917l19.1-81.081-43.828 70.838a4 4 0 0 1-6.23.724l-29.707-29.707a4 4 0 0 1 .724-6.23L85.998 105.8l-81.08 19.099A4 4 0 0 1 0 121.006V78.994a4 4 0 0 1 4.917-3.893l81.081 19.1L15.16 50.372a4 4 0 0 1-.724-6.23l29.707-29.707a4 4 0 0 1 6.23.724L94.2 85.998 75.1 4.918A4 4 0 0 1 78.995 0h42.012a4 4 0 0 1 3.893 4.917M100 111.43c6.312 0 11.429-5.117 11.429-11.429S106.312 88.571 100 88.571 88.571 93.688 88.571 100s5.117 11.429 11.429 11.429" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape40);
const Memo = memo(ForwardRef);
export default Memo;
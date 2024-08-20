import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape85 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M50.714 0h-50v50c0 25.462 19.033 46.479 43.647 49.6C19.401 102.402 0 123.578 0 149.286v50h50c25.462 0 46.479-19.033 49.6-43.647 2.802 24.96 23.978 44.361 49.686 44.361h50v-50c0-25.462-19.033-46.479-43.647-49.6C180.599 97.598 200 76.422 200 50.714v-50h-50c-25.462 0-46.479 19.033-49.6 43.647C97.598 19.401 76.422 0 50.714 0" clipRule="evenodd" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape85);
const Memo = memo(ForwardRef);
export default Memo;
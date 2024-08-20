import type { SVGProps } from "react";
import { type Ref, forwardRef, memo } from "react";
const Shape12 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>): JSX.Element => <svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" d="M100 200q-9.896 0-18.23-4.948-8.071-4.687-13.02-12.76-4.687-8.334-4.687-18.23 0-12.5 5.729-20.833 5.73-8.333 17.708-19.531 8.854-8.073 8.854-15.365v-4.687h-4.687q-8.073 0-22.136 16.146-13.802 16.145-33.594 16.145-9.895 0-18.229-4.687-8.073-4.948-13.02-13.021Q0 109.896 0 100t4.688-17.969q4.947-8.333 13.02-13.02 8.334-4.949 18.23-4.948 19.53 0 33.333 15.885t22.396 15.885h4.687v-4.166q0-7.293-8.854-15.365l-5.99-5.469Q75 64.843 69.531 56.51q-5.469-8.593-5.469-20.572 0-9.896 4.688-17.97 4.948-8.332 13.02-13.02Q90.105 0 100 0t17.969 4.948q8.333 4.948 13.021 13.02 4.947 8.074 4.947 17.97 0 19.53-15.885 33.333t-15.885 22.396v4.166h4.166q8.854 0 22.396-15.885 13.28-15.885 33.334-15.885 9.895 0 17.968 4.947 8.334 4.688 13.021 12.76Q200 89.846 200 100q0 9.896-4.948 18.229-4.687 8.073-13.021 13.021-8.073 4.687-17.968 4.687-12.24 0-21.094-5.989-8.594-5.99-19.271-17.448-8.073-8.854-15.365-8.854h-4.166v4.687q0 9.636 15.885 22.396t15.885 33.333q0 9.897-4.947 18.23-4.688 8.073-12.761 12.76Q110.156 200 100 200" /></g><defs><clipPath id="a"><path d="M0 0h200v200H0z" /></clipPath></defs></svg>;
const ForwardRef = forwardRef(Shape12);
const Memo = memo(ForwardRef);
export default Memo;
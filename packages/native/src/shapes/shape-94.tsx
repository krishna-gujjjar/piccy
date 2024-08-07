import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { type Ref, forwardRef, memo } from "react";
const Shape94 = (props: SvgProps, ref: Ref<Svg>): JSX.Element => <Svg width={200} height={200} fill="none" viewBox="0 0 200 200" ref={ref} {...props}><G clipPath="url(#a)"><Path fill="currentColor" fillRule="evenodd" d="M0 0c0 55.229 44.772 100 100 100C44.772 100 0 144.772 0 200h12c0-48.601 39.399-88 88-88s88 39.399 88 88h12c0-55.228-44.772-100-100-100 55.228 0 100-44.771 100-100h-12c0 48.601-39.399 88-88 88S12 48.601 12 0zm24 0c0 41.974 34.026 76 76 76s76-34.026 76-76h-12c0 35.346-28.654 64-64 64S36 35.346 36 0zm24 0c0 28.719 23.281 52 52 52s52-23.281 52-52h-12c0 22.091-17.909 40-40 40S60 22.091 60 0zm52 124c41.974 0 76 34.026 76 76h-12c0-35.346-28.654-64-64-64s-64 28.654-64 64H24c0-41.974 34.026-76 76-76m0 24c28.719 0 52 23.281 52 52h-12c0-22.091-17.909-40-40-40s-40 17.909-40 40H48c0-28.719 23.281-52 52-52" clipRule="evenodd" /></G><Defs><ClipPath id="a"><Path d="M0 0h200v200H0z" /></ClipPath></Defs></Svg>;
const ForwardRef = forwardRef(Shape94);
const Memo = memo(ForwardRef);
export default Memo;
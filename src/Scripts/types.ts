import { JSX } from "solid-js";

export type mComponent<P = any> = (props: P) => JSX.Element;
// export type mComponent<P> = (...props: P[]) => JSX.Element;

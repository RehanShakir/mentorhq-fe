/** Function with no parameters */
export type FunctionWithNoParam = () => void;

/** Function with one parameter */
export type FunctionWithParam<T> = (p: T) => void;

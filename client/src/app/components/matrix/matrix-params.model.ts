export interface MatrixParams {
    m: number;
    n: number;
    transpose?: boolean;
    label?: boolean | ((i: number, j: number) => string);
    color?: boolean | ((i: number, j: number) => string);
    highlight?: "rows" | "columns" | "cells";
}
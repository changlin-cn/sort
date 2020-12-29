export interface compareFnDefalutType<T> {
  (a: T, b: T): number;
}

export const compareFnDefalut: compareFnDefalutType<unknown> = (a, b) => {
  if ((a as number | string) > (b as number | string)) {
    return 1;
  }

  if ((a as number | string) < (b as number | string)) {
    return -1;
  }

  return 0;
};

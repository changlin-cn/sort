interface compareFnDefalut {
  <T>(a: T, b: T): number;
}

export const compareFnDefalut: compareFnDefalut = (a, b) => {
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  return 0;
};

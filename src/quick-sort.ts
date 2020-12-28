import { compareFnDefalut } from './compare-fn-defalut';

export function quickSort<T>(arr: T[], compareFn: (a: T, b: T) => number = compareFnDefalut): T[] {
  const length = arr.length;

  if (length < 2) {
    return arr.slice();
  }

  const compared = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    const compareReault = compareFn(arr[i], compared);
    if (compareReault < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left, compareFn).concat(compared, quickSort(right, compareFn));
}

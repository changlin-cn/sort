import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';
/**
 * 快速排序
 * @param arr
 * @param compareFn
 */
export function quickSort<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
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
  const leftSorted = left.length > 1 ? quickSort(left, compareFn) : left;
  const rightSorted = right.length > 1 ? quickSort(right, compareFn) : right;

  return leftSorted.concat(compared, rightSorted);
}

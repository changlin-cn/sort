import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';
/**
 * 选择排序
 * @param arr
 * @param compareFn
 */
export function selectionSort<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;
  const result = arr.slice();
  if (length < 2) {
    return result;
  }
  let min: number;
  let temp: T;
  for (let i = 0; i < length - 1; i++) {
    const current = result[i];
    min = i;
    temp = result[i];

    for (let j = i + 1; j < length; j++) {
      const compareReault = compareFn(result[j], temp);
      if (compareReault < 0) {
        min = j;
        temp = result[j];
      }
    }
    if (min > i) {
      result[i] = result[min];
      result[min] = current;
    }
  }

  return result;
}

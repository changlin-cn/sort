import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';
/**
 * 冒泡排序
 * @param arr
 * @param compareFn
 */
export function bubbleSort<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;
  const result = arr.slice();
  if (length < 2) {
    return result;
  }

  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
      const a = result[j];
      const b = result[j - 1];
      const compareReault = compareFn(a, b);

      if (compareReault < 0) {
        result[j] = b;
        result[j - 1] = a;
      }
    }
  }

  return result;
}

import { compareFnDefalut } from './compare-fn-defalut';
/**
 * 插入排序
 */
export function insertionSort<T>(arr: T[], compareFn: (a: T, b: T) => number = compareFnDefalut): T[] {
  const length = arr.length;
  const result = arr.slice();
  if (length < 2) {
    return result;
  }

  for (let i = 1; i < length; i++) {
    for (let j = i; j > 0; j--) {
      const a = result[j];
      const b = result[j - 1];
      const compareReault = compareFn(a, b);

      if (compareReault < 0) {
        result[j] = b;
        result[j - 1] = a;
        continue;
      }
      break;
    }
  }

  return result;
}
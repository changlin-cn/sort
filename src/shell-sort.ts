import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';

function createGaps(length: number): number[] {
  const gaps = [1];

  while (gaps[gaps.length - 1] < length / 3) {
    gaps.push(gaps[gaps.length - 1] * 3 + 1);
  }
  return gaps;
}
/**
 * 希尔排序
 * @param arr
 * @param compareFn
 */
export function shellSort<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;
  const result = arr.slice();
  if (length < 2) {
    return result;
  }
  const gaps = createGaps(length);

  while (gaps.length > 0) {
    const gap = <number>gaps.pop();
    for (let i = gap; i < length; i += gap) {
      for (let j = i; j > 0; j -= gap) {
        const a = result[j];
        const b = result[j - gap];
        const compareReault = compareFn(a, b);
        if (compareReault < 0) {
          result[j] = b;
          result[j - gap] = a;
          continue;
        }
        break;
      }
    }
  }

  return result;
}

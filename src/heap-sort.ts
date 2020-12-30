import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';

export function heapSort<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;
  const result = arr.slice();
  if (length < 2) {
    return result;
  }

  buildHeap(result, compareFn);

  for (let i = result.length - 1; i > 0; i--) {
    const temp = result[i];
    result[i] = result[0];
    result[0] = temp;
    ajustHeap(result, 0, compareFn, i);
  }

  return result;
}

function buildHeap<T>(arr: T[], compareFn: compareFnDefalutType<T>): void {
  const len = arr.length;
  const indexOfLastLeafParent = Math.ceil(len / 2) - 1;
  for (let i = indexOfLastLeafParent; i >= 0; i--) {
    ajustHeap(arr, i, compareFn, len);
  }
}

function ajustHeap<T>(arr: T[], index: number, compareFn: compareFnDefalutType<T>, ajustLength: number): void {
  let maxIndex = index;
  const leftIndex = index * 2 + 1;
  const rightIndex = 2 * (index + 1);
  if (leftIndex + 1 <= ajustLength && compareFn(arr[leftIndex], arr[index]) >= 0) {
    maxIndex = leftIndex;
  }
  if (rightIndex + 1 <= ajustLength && compareFn(arr[rightIndex], arr[maxIndex]) >= 0) {
    maxIndex = rightIndex;
  }

  if (maxIndex !== index) {
    const temp = arr[maxIndex];
    arr[maxIndex] = arr[index];
    arr[index] = temp;
    ajustHeap(arr, maxIndex, compareFn, ajustLength);
  }
}

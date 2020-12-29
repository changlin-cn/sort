import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';

export function mergeSortFromTop<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;

  if (length < 2) {
    return arr.slice();
  }

  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return mergeArray(mergeSortFromTop(left, compareFn), mergeSortFromTop(right, compareFn), compareFn);
}

function mergeArray<T>(arrLeft: T[], arrRgiht: T[], compareFn: compareFnDefalutType<T>): T[] {
  const res = [];
  const length = arrLeft.length + arrRgiht.length;

  for (let i = 0, l = 0, r = 0; i < length; i++) {
    if (l >= arrLeft.length) {
      res[i] = arrRgiht[r++];
    } else if (r >= arrRgiht.length) {
      res[i] = arrLeft[l++];
    } else if (compareFn(arrRgiht[r], arrLeft[l]) < 0) {
      res[i] = arrRgiht[r++];
    } else {
      res[i] = arrLeft[l++];
    }
  }

  return res;
}

export function mergeSortFromBottom(): void {
  //
}

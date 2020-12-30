import { compareFnDefalut, compareFnDefalutType } from './compare-fn-defalut';
/**
 * 自顶而下的归并排序 （递归实现）
 * @param arr
 * @param compareFn
 */
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
/**
 * 自底而上的归并排序 （非递归实现）
 * @param arr
 * @param compareFn
 */
export function mergeSortFromBottom<T>(arr: T[], compareFn: compareFnDefalutType<T> = compareFnDefalut): T[] {
  const length = arr.length;

  if (length < 2) {
    return arr.slice();
  }

  let res = arr.map((n) => [n]);
  while (res.length > 1) {
    const resNew = [];
    for (let i = 0; i < res.length; i += 2) {
      if (i + 1 === res.length) {
        resNew.push(res[i]);
        break;
      }
      resNew.push(mergeArray(res[i], res[i + 1], compareFn));
    }

    res = resNew;
  }

  return res[0];
}

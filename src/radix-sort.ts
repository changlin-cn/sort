interface getInt<T> {
  (item: T): number;
}

const getIntDefault: getInt<unknown> = (item) => item as number;

/**
 * 基数排序 (给定数组排序值必须是大于或等于0的整数)
 * @param arr
 * @param getInt
 * @param order
 */
export function radixSort<T>(arr: T[], getInt: getInt<T> = getIntDefault, order: 'asc' | 'desc' = 'asc'): T[] {
  if (arr.length < 2) {
    return arr.slice();
  }

  let max = getInt(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    const current = getInt(arr[i]);
    if (current > max) {
      max = current;
    }
  }

  let digits = 1;
  while (max >= 10) {
    digits++;
    max /= 10;
  }

  const result = arr.slice();
  const temp: T[][] = [];
  for (let j = 1; j <= digits; j++) {
    temp.length = 0;
    for (let k = 0; k < result.length; k++) {
      let num;
      const current = result[k];
      if (j === 1) {
        num = getInt(current);
      } else {
        const level = Math.pow(10, j - 1);
        const currentInt = getInt(current);
        if (currentInt < level) {
          num = 0;
        } else {
          num = Math.floor((currentInt / level) % 10);
        }
      }

      if (!Array.isArray(temp[num])) {
        temp[num] = [];
      }
      temp[num].push(current);
    }
    result.length = 0;

    temp.forEach((group) => {
      for (let i = 0; i < group.length; i++) {
        result.push(group[i]);
      }
    });
  }

  if (order === 'asc') {
    return result;
  }
  return result.reverse();
}

interface getInt<T> {
  (item: T): number;
}

const getIntDefault: getInt<unknown> = (item) => item as number;

/**
 * 计数排序 (给定数组排序值必须是大于或等于0的整数)
 * @param arr
 * @param getInt
 * @param order
 */
export function countingSort<T>(arr: T[], getInt: getInt<T> = getIntDefault, order: 'asc' | 'desc' = 'asc'): T[] {
  if (arr.length < 2) {
    return arr.slice();
  }

  const temp: T[][] = [];

  for (let j = 0; j < arr.length; j++) {
    const index = getInt(arr[j]);
    if (!Array.isArray(temp[index])) {
      temp[index] = [];
    }
    temp[index].push(arr[j]);
  }

  const result: T[] = [];
  temp.forEach((group) => {
    // result = result.concat(group); 性能差
    for (let i = 0; i < group.length; i++) {
      result.push(group[i]);
    }
  });

  if (order === 'asc') {
    return result;
  }
  return result.reverse();
}

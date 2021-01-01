interface getInt<T> {
  (item: T): number;
}

const getIntDefault: getInt<unknown> = (item) => item as number;

/**
 * 计数排序
 * @param arr
 * @param getInt
 */
export function countingSort<T>(arr: T[], getInt: getInt<T> = getIntDefault, order: 'asc' | 'desc' = 'asc'): T[] {
  if (arr.length < 2) {
    return arr.slice();
  }

  let min: number = getInt(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const int = getInt(arr[i]);

    if (int < min) {
      min = int;
    }
  }

  const temp: T[][] = [];

  for (let j = 0; j < arr.length; j++) {
    const index = getInt(arr[j]) - min;
    if (!Array.isArray(temp[index])) {
      temp[index] = [];
    }
    temp[index].push(arr[j]);
  }

  let result: T[] = [];
  temp.forEach((group) => {
    result = result.concat(group);
  });

  if (order === 'asc') {
    return result;
  }
  return result.reverse();
}

/**
 * 交换数组的两个元素
 * @param arr
 * @param pos1
 * @param pos2
 */
export function swap<T>(arr: T[], pos1: number, pos2: number): void {
  const temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

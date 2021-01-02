import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  shellSort,
  mergeSortFromBottom,
  mergeSortFromTop,
  heapSort,
  countingSort,
  radixSort
} from '../src/index';

[20, 200, 2000, 20000, 100000, 100000, 100000].forEach((len) => {
  const dataRandom: number[] = [];
  while (dataRandom.length < len) {
    dataRandom.push(parseInt(`${(Math.random() * 10000).toFixed(0)}`));
  }

  console.log(`${len} start --------------`);
  const dataCopy = dataRandom.slice();
  console.time('array.sort:');
  dataCopy.sort((a, b) => a - b);
  console.timeEnd('array.sort:');

  [
    bubbleSort,
    insertionSort,
    selectionSort,
    quickSort,
    shellSort,
    mergeSortFromBottom,
    mergeSortFromTop,
    heapSort,
    countingSort,
    radixSort
  ].forEach((fn) => {
    console.time(fn.name);
    fn(dataRandom);
    console.timeEnd(fn.name);
  });

  console.log(`${len} end -------------\n`);
});

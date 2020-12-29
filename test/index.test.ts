import { RESULT_ASC, RESULT_DESC, RESULT_STRING_ASC, RESULT_STRING_DESC } from './data/result';
import { SOURCE, SOURCE_STRING } from './data/source';

import {
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  shellSort,
  mergeSortFromBottom,
  mergeSortFromTop,
} from '../src/index';

[bubbleSort, insertionSort, selectionSort, quickSort, shellSort, mergeSortFromTop].forEach((fn) => {
  // number
  test(`${fn.name} asc 1;number[]`, () => {
    expect(fn(SOURCE)).toEqual(RESULT_ASC);
  });

  test(`${fn.name} asc 2;number[]`, () => {
    expect(fn(SOURCE, (a, b) => a - b)).toEqual(RESULT_ASC);
  });

  test(`${fn.name} desc;number[]`, () => {
    expect(fn(SOURCE, (a, b) => b - a)).toEqual(RESULT_DESC);
  });

  // string
  test(`${fn.name} asc 1;string[]`, () => {
    expect(fn(SOURCE_STRING)).toEqual(RESULT_STRING_ASC);
  });

  test(`${fn.name} asc 2;string[]`, () => {
    expect(fn(SOURCE_STRING, (a, b) => (a > b ? 0 : -1))).toEqual(RESULT_STRING_ASC);
  });

  test(`${fn.name} desc;string[]`, () => {
    expect(fn(SOURCE_STRING, (a, b) => (a < b ? 0 : -1))).toEqual(RESULT_STRING_DESC);
  });
});

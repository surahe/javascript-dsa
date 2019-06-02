import bubbleSort from '../src/algorithms/sorting/bubbleSort'
import selectionSort from '../src/algorithms/sorting/selectionSort'
import insertionSort from '../src/algorithms/sorting/insertionSort'
import quickSort from '../src/algorithms/sorting/quickSort'
import QuickSortInPlace from '../src/algorithms/sorting/QuickSortInPlace'

import sortingTestsHelper from './sorting_tests_helper'

describe('冒泡排序', () => {
  test('排列给定的数组', () => {
    sortingTestsHelper.testSort(bubbleSort)
  })
})

describe('选择排序', () => {
  test('排列给定的数组', () => {
    sortingTestsHelper.testSort(selectionSort)
  })
})

describe('插入排序', () => {
  test('排列给定的数组', () => {
    sortingTestsHelper.testSort(insertionSort)
  })
})

describe('快速排序', () => {
  test('排列给定的数组', () => {
    sortingTestsHelper.testSort(quickSort)
  })
})

describe('原地快速排序', () => {
  test('排列给定的数组', () => {
    sortingTestsHelper.testSort(QuickSortInPlace)
  })
})

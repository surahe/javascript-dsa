function bubbleSort(array) {
  let swapped = false // 记录是否发生交换的标记
  let n = array.length

  for (let i = 0; i < n - 1; i += 1) {
    swapped = false

    for (let j = 0; j <n - i; j += 1) {

      // 如果顺序错误，交换它们的位置
      if (array[j + 1] < array[j]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]]

        // 标记交换
        swapped = true
      }
    }
    
    // 如果没有发生交换则数组已经排好序，不需要继续进行
    if (!swapped) {
      return array;
    }
  }

  return array;
}

export default bubbleSort

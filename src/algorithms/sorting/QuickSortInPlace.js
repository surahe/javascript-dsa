function QuickSortInPlace (originalArray, inputLowIndex = 0, inputHighIndex = originalArray.length - 1) {
  const array = originalArray

  const partitionArray = (lowIndex, highIndex) => {
    const swap = (leftIndex, rightIndex) => {
      const temp = array[leftIndex]
      array[leftIndex] = array[rightIndex]
      array[rightIndex] = temp
    }

    const pivot = array[highIndex]

    let partitionIndex = lowIndex
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
      if (array[currentIndex] < pivot) {
        swap(partitionIndex, currentIndex)
        partitionIndex += 1
      }
    }

    swap(partitionIndex, highIndex)

    return partitionIndex
  }

  if (inputLowIndex < inputHighIndex) {
    const partitionIndex = partitionArray(inputLowIndex, inputHighIndex)
    QuickSortInPlace(array, inputLowIndex, partitionIndex - 1)
    QuickSortInPlace(array, partitionIndex + 1, inputHighIndex)
  }

  return array
}

export default QuickSortInPlace

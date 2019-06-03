function binarySearch (array, element) {
  let startIndex = 0
  let endIndex = array.length - 1

  while (startIndex <= endIndex) {
    let middleIndex = Math.floor((endIndex + startIndex) / 2)

    if (array[middleIndex] === element) {
      return middleIndex
    }
    if (array[middleIndex] > element) {
      endIndex = middleIndex - 1
    } else {
      startIndex = middleIndex + 1
    }
  }

  return -1
}

export default binarySearch

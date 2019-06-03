/**
 * Linear search implementation.
 *
 * @param {*[]} array
 * @param {*} seekElement
 * @return {number[]}
 */
function linearSearch (array, seekElement) {
  const foundIndices = []

  array.forEach((element, index) => {
    if (element === seekElement) {
      foundIndices.push(index)
    }
  })

  return foundIndices
}

export default linearSearch

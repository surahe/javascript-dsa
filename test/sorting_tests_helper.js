var testHelper = {
  testSort: function (sortFn) {
    expect(sortFn([])).toEqual([])
    expect(sortFn([1])).toEqual([1])
    expect(sortFn([2, 1])).toEqual([1, 2])
    expect(sortFn([3, 1, 2])).toEqual([1, 2, 3])
    expect(sortFn([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
    expect(sortFn([6, 5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5, 6])
    expect(sortFn([1, 295, 3, 6, 8, 10, 10, 20, 0, 5])).toEqual([0, 1, 3, 5, 6, 8, 10, 10, 20, 295])
    expect(sortFn(['a', 'b', 'abc'])).toEqual(['a', 'abc', 'b'])
  }
}

export default testHelper

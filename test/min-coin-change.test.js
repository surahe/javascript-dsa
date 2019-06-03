import MinCoinChange from '../src/algorithms/dynamic-programing/min-coin-change'

const minCoinChange = new MinCoinChange([1, 2, 3])

describe('动态规划：最少硬币找零', () => {
  it('找回0元', () => {
    expect(minCoinChange.makeChange(0)).toEqual([])
  })
  it('找回1元', () => {
    expect(minCoinChange.makeChange(1)).toEqual([1])
  })
  it('找回2元', () => {
    expect(minCoinChange.makeChange(2)).toEqual([2])
  })
  it('找回3元', () => {
    expect(minCoinChange.makeChange(3)).toEqual([3])
  })
  it('找回4元', () => {
    expect(minCoinChange.makeChange(4)).toEqual([1, 3])
  })
  it('找回6元', () => {
    expect(minCoinChange.makeChange(6)).toEqual([3, 3])
  })
})

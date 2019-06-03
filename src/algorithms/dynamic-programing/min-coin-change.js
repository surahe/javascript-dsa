class MinCoinChange {
  constructor (coins) {
    this.coins = coins // 目标找零数
    this.cache = {} // 缓存找零数为N时的最优结果
  }

  makeChange (amount) {
    if (!amount) return []
    if (this.cache[amount]) return this.cache[amount]
    let min = []
    let newMin
    let newAmount // 当前找零数
    this.coins.forEach(coin => { // 遍历硬币组合
      newAmount = amount - coin // 对每个面值的硬币计算newAmount
      if (newAmount >= 0) {
        newMin = this.makeChange(newAmount)
      }
      if (newAmount >= 0 && // 判断newAmount 是否有效
        (newMin.length < min.length - 1 || !min.length) && // newMin （最少硬币数）是否是最优解
        (newMin.length || !newAmount)) { // newMin 和newAmount 是否是合理的值
        min = [coin].concat(newMin)
      }
    })
    return (this.cache[amount] = min)
  }
}

export default MinCoinChange

/**
 * 普通递归时，内存需要记录调用的堆栈所出的深度和位置信息
 * 在最底层计算返回值，再根据记录的信息，跳回上一层级计算，然后再跳回更高一层，依次运行，直到最外层的调用函数
 * 在cpu计算和内存会消耗很多，而且当深度过大时，会出现堆栈溢出
 */

// eslint-disable-next-line no-unused-vars
function fibonaci (n) {
  if (n === 1 || n === 2) return 1
  return fibonaci(n - 1) + fibonaci(n - 2)
}

/**
 * 在ECMAScript 6，我们将迎来尾递归优化，通过尾递归优化
 * javascript代码在解释成机器码的时候，将会向while看齐，也就是说，同时拥有数学表达能力和while的效能
 */

// eslint-disable-next-line no-unused-vars
function Fibonacci2 (n, ac1 = 1, ac2 = 1) {
  if (n <= 1) { return ac2 };

  return Fibonacci2(n - 1, ac2, ac1 + ac2)
}

function fibonacciNth (n) {
  let previousValue = 0
  let currentValue = 1

  if (n === 1) {
    return currentValue
  }

  let iterationsCounter = n - 1

  while (iterationsCounter) {
    currentValue += previousValue
    previousValue = currentValue - previousValue
    iterationsCounter--
  }
  return currentValue
}

export default fibonacciNth

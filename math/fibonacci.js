console.log("fibonacci")

function getFibonacciNumbers(n) {
  var nums = [0, 1]
  for (let i = 2; i < n; i++) { 
    nums[i] = nums[i-1] + nums[i-2]
  }
  return nums
}

// o(2^n) i.e worse than o(n)
function fibonacciRecursive(n) {
  if (n < 2) return n
  return fibonacciRecursive(n-1) + fibonacciRecursive(n-2) 
}

console.log(fibonacciRecursive(5))
console.log(fibonacciRecursive(6))
console.log(fibonacciRecursive(20))
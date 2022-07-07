function getFactorial(n) {
    var fact = 1
    for (let i = 2; i <= n; i++) {
        fact *= i
    }
    return fact
}


function factorialRecursive(n) {
    if (n < 2) return 1
    return n * factorialRecursive(n-1)
}

console.log(factorialRecursive(5))
console.log(factorialRecursive(4))
console.log(factorialRecursive(7))
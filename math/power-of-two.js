const isPowerOfTwo = n => {
    for (let i = n; i > 2; i=i/2) {
        if (i % 2 == 1) return false
    }
    return true
}


// bit wise 
const isPowerOfTwoBitwise = n => {
    if (n < 1) return true
    return (n & (n-1)) == 0
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(128))
console.log(isPowerOfTwo(96))
console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))
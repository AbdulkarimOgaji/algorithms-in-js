const isPrimenumber = n => {
    if (n < 2) return false
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i === 0) return false
    }
    return true
}


console.log(isPrimenumber(5))
console.log(isPrimenumber(93))
console.log(isPrimenumber(43))
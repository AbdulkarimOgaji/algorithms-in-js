

function linear(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == t) return i
    }
    return -1
}

const array = [-7, 2, 11, 23, 10, 50]


console.log(linear(array, 11))
console.log(linear(array, 10))
console.log(linear(array, 20))
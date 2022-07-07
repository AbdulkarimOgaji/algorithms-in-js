

// O(logn)
function binarySearch(arr, t) {
    var right = arr.length -1
    var left = 0
    while (left <= right) {
        var mid = Math.floor((left+right)/2)
        if (t == arr[mid]) return mid
        if (t < arr[mid]) {
            right = mid -1
        }
        else {
            left = mid+1
        }
    }
    return -1
}

// helper function that takes both left and right indices as parameters
function search(arr, t, left, right) {
    if (left > right) return -1
    var mid = Math.floor((left+right)/2)
    if (t === arr[mid]) return mid
    if (t < arr[mid]) return search(arr, t, left, mid-1)
    return search(arr, t, mid+1, right)
}


// ALSO O(logn)
function binaryRecursive(arr, t) {
    return search(arr, t, 0, arr.length-1)
}


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binaryRecursive(array, 3))
console.log(binaryRecursive(array, 6))
console.log(binaryRecursive(array, 7))
console.log(binaryRecursive(array, 27))


// Worst case - O(n^2) - when array is already sorted
// Avg case - O(nlogn)
function quickSort(arr) {
    if (arr.length < 2) return arr
    var left = []
    var right = []
    var pivot = arr[arr.length-1]

    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) left.push(arr[i])
        else right.push(arr[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}


const array = [-6, 1, -7, 15, 14, 3, 2, 1]


console.log(quickSort(array))
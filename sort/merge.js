
// O(nlogn)
function mergeSort(arr) {
    if (arr.length < 2) return arr

    var mid = Math.floor(arr.length/2)
    var leftArr = arr.slice(0, mid)
    var rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}


// helper function 
function merge(leftArr, rightArr) {
    var sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

const array = [-6, 1, -7, 15, 14, 3, 2, 1]


console.log(mergeSort(array))
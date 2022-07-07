

// O(n^2)
function bubble(arr) {
    while(true) {
        var hasSwapped = false   
        for (let index = 0; index < arr.length-1; index++) {
            if (arr[index] > arr[index+1]) {
                var tmp = arr[index]
                arr[index] = arr[index+1]
                arr[index+1] = tmp
                hasSwapped = true
            }
        }
        if (!hasSwapped) return arr
    }
}


const array = [-6, 1, -7, 15, 14, 3, 2, 1]

console.log(bubble(array))
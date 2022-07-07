


// O(n^2)
function insertion(arr) {
  for (let lastSorted = 1; lastSorted < arr.length; lastSorted++) {
    const toInsert = arr[lastSorted];
    let i = lastSorted - 1;
    while (i >= 0 && toInsert < arr[i]) {
      arr[i + 1] = arr[i]
      i--
    }
    arr[i + 1] = toInsert
  }
  return arr
}


const array = [-6, 1, -7, 15, 14, 3, 2, 1]


console.log(insertion(array))
function rot13(str) {
    var result = ""
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i=0; i < str.length; i++) {
      var idx = letters.indexOf(str[i])
      if (idx == -1) {
        result += str[i]
        continue
      }
      var decipheredIdx = (idx - 13) < 0 ? idx + 13 : (idx-13)
      result += letters[decipheredIdx]
    }
    return result
  }
  
  console.log(rot13("SERR PBQR PNZC"));
function convertToRoman(num) {
    function getDigits(n) {
        if (n < 4) {
            var roman = ""
            for (let i = 0; i < n; i++) {  
                roman += "I"          
            }
            return roman
        }
    
        if (n == 4) return "IV"
        if (n == 9) return "IX"
        
        var roman = "V"
        for (let i = 0; i < n-5; i++) {  
            roman += "I"          
        }
        return roman
    }
    
    function getTens(n) {
        if (n < 4) {
            var roman = ""
            for (let i = 0; i < n; i++) {  
                roman += "X"          
            }
            return roman
        }
        if (n == 4) return "XL"
        if (n == 9) return "XC"
    
        var roman = "L"
        for (let i = 0; i < n-5; i++) {  
            roman += "X"          
        }
        return roman
    }
    
    function getHundred(n) {    
        if (n < 4) {
            var roman = ""
            for (let i = 0; i < n; i++) {  
                roman += "C"          
            }
            return roman
        }
        if (n == 4) return "CD"
        if (n == 9) return "CM"
    
        var roman = "D"
        for (let i = 0; i < n-5; i++) {  
            roman += "C"          
        }
        return roman
    }
    
    function getThousand(n) {
        var roman = ""
        for (let i = 0; i < n; i++) {  
            roman += "M"          
        }
        return roman
    }
    var digits = num % 10
    var tens = Math.floor((num % 100) / 10)
    var hundred = Math.floor((num % 1000) / 100)
    var thousand = Math.floor(num / 1000)
    console.log(thousand, hundred, tens, digits)
    return getThousand(thousand) + getHundred(hundred) + getTens(tens) + getDigits(digits);
}

   console.log(convertToRoman(3884));
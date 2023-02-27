function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() // Solo números y letras convertido a minúscula

    const strToArray = cleanStr.split("") // ["h", "o", "l", "a"]
    const invertedArray = strToArray.reverse() // ["a", "l", "o", "h"]
    const invertedStr = invertedArray.join("") // "aloh"

    return (cleanStr == invertedStr) ? true : false
}

console.log(isPalindrome("_eye")) // true
console.log(isPalindrome("not a palindrome")) // false
console.log(isPalindrome("A man, a plan, a canal. Panama")) // true
console.log(isPalindrome("My age is 0, 0 si ega ym.")) // true
console.log(isPalindrome("0_0 (: /-\ :) 0-0")) // true
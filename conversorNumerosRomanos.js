function convertToRomans(num){
  let numRoman = "", mod = 1, divTrunc = 0, i = 0
  let breakRomans =  [ [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],]
  while(mod != 0){
    if(num >= breakRomans[i][0]){
      divTrunc = Math.trunc(num / breakRomans[i][0])
      mod = num % breakRomans[i][0]
      numRoman += breakRomans[i][1].repeat(divTrunc)
      num = mod
      if(mod == 0){ return numRoman }
    }
    i++
  }
}

console.log(convertToRomans(11)) // XI
console.log(convertToRomans(21)) // XXI
console.log(convertToRomans(39)) // XXXIX
console.log(convertToRomans(649)) // DCXLIX
console.log(convertToRomans(798)) // DCCXCVIII
console.log(convertToRomans(2014)) // MMXIV
console.log(convertToRomans(1023)) // MXXIII
console.log(convertToRomans(3999)) // MMMCMXCIX











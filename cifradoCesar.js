function rot13(str){

    let letter = str.split("") // divido el string en un array

    for (let i = 0; i < letter.length; i++) {
        if(isLetter(letter[i])){ // solo ingreso si el elemento es una letra
            const code = letter[i].toUpperCase().charCodeAt(0) // obtengo el código UNICODE del elemento
            const rot13Code = code + 13 // aplico el cifrado 
            // si pasa los 90(Z), vuelve a contar desde 65(A)
            const letterRot13 = (rot13Code > 90) ? getLetter(rot13Code - 91 + 65) : getLetter(rot13Code)
            //Actualizo el elemento con rot13
            letter[i] = letterRot13
        }
    }
    
    letter = letter.join("") // Uno los elementos en un string
    return letter
}

// Comprueba si el caracter es una letra
function isLetter(caracter){
    let char = caracter.toUpperCase().charCodeAt(0);
	return char > 64 && char < 91;
}

// Obtenemos la letra en base al código UNICODE
function getLetter(code){
    return String.fromCharCode(code)
}

rot13("SERR PBQR PNZC") // FREE CODE CAMP
rot13("FREE CODE CAMP") // SERR PBQR PNZC
rot13("FREE PIZZA!") // SERR CVMMN!
rot13("FREE LOVE?") // SERR YBIR?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
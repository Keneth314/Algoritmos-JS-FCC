/*
    Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.
    El usuario puede completar el campo del formulario de la forma que elija, siempre que tenga el formato de un número estadounidense válido. Los siguientes ejemplos son de formatos válidos para números estadounidenses:
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555
*/


function telephoneCheck(str) {

    // /^: Indica que la coincidencia debe comenzar desde el principio de la cadena.
    // ?: Significa que haya uno o ninguno. Ejm: /Star\s?\d?/ Significa que despues de la palabra "Star" haya un espacio o no, y seguidamente haya o no un número. Correcto: "Star5", "Star ", "Star 3"
    // (1\s?)?: Opcionalmente que haya un "1" seguido de un espacio opcional. Correcto: 1 
    // \d{3}: Seguidamente que haya 3 dígitos
    // ([-\s]?): Opcionalmente que haya un "-" y un espacio
    // \2: Es un backreference que se refiere al mismo patrón que se encuentra en el segundo grupo, el cual es ([-\s]?) 
    // d{4}: Seguidamente que haya 4 dígitos
    // $/: Indica que la coincidencia debe terminar en el final de la cadena.

    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/

    // \(\d{3}\) : Que haya 3 dígitos dentro de parentesis, en algunos casos \ , sirve para buscar un caracter en especifico

    let rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/

    return (rex1.test(str)) ? true : (rex2.test(str)) ? true : false
}

console.log(telephoneCheck("1 555 555 5555")) // true
console.log(telephoneCheck("555-555-5555")) // true
console.log(telephoneCheck("1 (555) 555-5555")) // true
console.log(telephoneCheck("1(555) 555-5555")) // true
console.log(telephoneCheck("(555)555-5555")) // true
console.log(telephoneCheck("2(757)622-7382")) // false
console.log(telephoneCheck("555)-555-5555")) // false
console.log(telephoneCheck("57612271382")) // false
console.log(telephoneCheck("10 (757) 622-7382")) // false
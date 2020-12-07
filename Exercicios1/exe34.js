/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.*/


validaString = (s1, s2) => {

    let contaLetras = 0
    for (let i = 0; i < s1.length; i++) {

        for (let j = 0; j < s2.length; j++) {

            if (s1.charAt(i).toUpperCase() == s2.charAt(j).toUpperCase()) {
                ++contaLetras
                break
            }
        }
    }
    if (s1.length == contaLetras) {
        return true
    } else {
        return false
    }

}

letrasComuns = (s1, s2) => {

    let contaLetras = 0
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            if (s1.charAt(i).toUpperCase() == s2.charAt(j).toUpperCase()) {
                s2 = s2.replace(s2.charAt(j), '')
                ++contaLetras
                break
            }
        }
    }
    return contaLetras
}

let s1 = 'cristiane'
let s2 = 'cristiane'

if (validaString(s1, s2)) {
    console.log('Os caracteres da primeira string estão contidos na segunda')
    console.log('Letras comuns: ', letrasComuns(s1, s2))
} else {
    console.log('Os caracteres da primeira string NÃO estão contidos na segunda')
    console.log('Letras comuns: ', letrasComuns(s1, s2))
}


function verificacaoDeString(string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for (let j = 0; j < string2.length; j++) {
            let caractereString2 = string2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if (!estaContido) {
            return estaContido
        }
    }
    return estaContido
}

console.log(verificacaoDeString('cristiane', 'cristiane'))

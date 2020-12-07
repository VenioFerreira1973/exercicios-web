const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna o caracter que se encontrar na quarta posição na string

console.log(escola.charAt(5)) //retorna valor vazio significando que encontrou nada na posição indicada

console.log(escola.charCodeAt(4)) //retorna o valor ASC refente ao caracter na posição indicada

console.log(escola.indexOf("3")) //retorna o indice ou posição do caracter 3 dentro da string

console.log(escola.substring(1)) //retorna tudo da string a partir da posição 1

console.log(escola.substring(1,3))//retorna uma parte de string do indice 1 ao indice 3

console.log('Escola '.concat(escola).concat('!')) //concatenação de strings

console.log(escola.replace(3, 'e')) //substitui a terceio caracter pelo "e"

console.log(escola.replace(/\d/, 'e'))//substitui o primeiro digito numerico encontrado pela letra "e"

console.log(escola.replace(/\d/g, 'e'))//substitui todos os digitos numericos encontrados pela letra "e"


console.log(escola.replace(/\w/g, 'e'))//substitui todos os caracteres pela letra "e"

console.log('Ana,Maria,Joao'.split(','))//converte a string em um array de strings usando um separador neste caso a virgula 

console.log('Ana,Maria,Joao'.split(/,/))//esta anotação da o mesmo resultado da anterior - ver expressoes regulares
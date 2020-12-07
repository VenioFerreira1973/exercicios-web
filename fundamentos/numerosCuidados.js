console.log(7/0) //demonstra o tipo infinity
if (1/0 == 9/0){
    console.log("infinito")
}

console.log("10" / 2) //da certo o compilador verifica se a string pode conter um numero e executa a operação

console.log("10.2" / 2) //da certo o compilador verifica se a string pode conter um numero e executa a operação

console.log("10,2" / 5) // da erro pois o javascript não consegue entender como numero a string

console.log("teste" / 5) //obviamente isso não da certo, pois a string não vira numero
 
console.log("show" * 2) //este tipo de operação não funciona no javascript

console.log("show" + 2) //neste caso o javascript concatena as duas coisas

console.log("3" - 2) //neste caso ele subtrai o resultado é 1

console.log("Show" + "de" + "bola") //funciona o javascript concatena as strings

console.log(0.1 + 0.7) //o resultado será 0,799999999999999 devido a convenções de linguagem

console.log((10.433434).toFixed(2)) //ok

//console.log(10.toString()) //não funciona


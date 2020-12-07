/*Faça um algoritmo que calcule o fatorial de um número*/

fatorial = (numero) => {
    if(numero == 0 || numero == 1){
        return 1
    } else {
        let fat = 1
        for (let i = numero; i > 1; i--){
            fat = fat * i
        }
        return fat
    }
}


function fatorial1 (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

const fat = (n) => n === 0 || n === 1 ? n : n * fatorial(n-1);

console.log(fat(5))


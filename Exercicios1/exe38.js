/*Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.*/

acharImpares = (n1 = 0, n2 = 100) => {

    let impares = []

    if (n1 < n2) {
        for(let i = n1; i < n2; i++) {
            if (i % 2 == 1){
                impares.push(i)
            }
        }
    } else {
        for(let i = n2; i < n1; i++) {
            if (i % 2 == 1){
                impares.push(i)
            }
        }
    }
    return impares
}

console.log(acharImpares(10, 100))

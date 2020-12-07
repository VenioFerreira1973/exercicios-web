/* Fazer um programa para encontrar todos os pares entre 1 e 100.*/

contaPares = () => {
    let i = 1
    let pares = []
    while (i <= 100) {
        i % 2 == 0 ? pares.push(i) : null
        i++
    }
}
console.log(contaPares())
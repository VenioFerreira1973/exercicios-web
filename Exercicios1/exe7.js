bhaskara = (a, b, c) => {


    let delta = Math.pow(b, 2) - (4 * a * c)

    if (delta < 0) {
        return 'Delta é negativo'
    } else {

        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        let resultado = []
        resultado.push(x1)
        resultado.push(x2)
        return resultado
    }

}

console.log('Bhaskara resolvido: ', bhaskara(3, -5, 12))
console.log('Bhaskara resolvido: ', bhaskara(1, 12, -13))
console.log('Bhaskara resolvido: ', bhaskara(2, -16, -18))
console.log('Bhaskara resolvido: ', bhaskara(1, -1, -6))

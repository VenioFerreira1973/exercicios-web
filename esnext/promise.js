function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)//resolve suporta apenas um parametro
        }, segundos * 1000) //tempo de espera do setTimeout
    })
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))


//usando reject
function falarDepoisDe2(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000) //tempo de espera do setTimeout
    })
}

falarDepoisDe2(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))//recebe o retorno do reject neste caso não concatena a linha anterior



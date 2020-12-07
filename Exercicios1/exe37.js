/*Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos.*/

progressaoAritmetrica = (numeroTermo, primeiroTermo, razao) => {
    //an = primeiroTermo + ((numeroTermo -1) * razao)
    let progAritmeticaSoma = {
        progAritmetica: [],
        soma: 0
    }
    for (let i = 1; i <= numeroTermo; i++) {
        progAritmeticaSoma.progAritmetica.push(primeiroTermo + ((i - 1) * razao))
        progAritmeticaSoma.soma = progAritmeticaSoma.soma + primeiroTermo + ((i - 1) * razao)
    }
    return progAritmeticaSoma
}

progressaoGeometrica = (numeroTermo, primeiroTermo, razao) => {
    //an = primeiroTermo * (razao ^ numeroTermo - 1)
    let progGeometricaSoma = {
        progGeometrica: [],
        soma: 0
    }
    for (let i = 1; i <= numeroTermo; i++) {
        progGeometricaSoma.progGeometrica.push(primeiroTermo * (Math.pow(razao, (i - 1))))
        progGeometricaSoma.soma = progGeometricaSoma.soma + primeiroTermo * (Math.pow(razao, (i - 1)))
    }
    return progGeometricaSoma
}


console.log(progressaoAritmetrica(10, 1, 3))
console.log(progressaoGeometrica(10, 1, 3))


function pA (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2)    
}

function pG (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

pA(10, 1, 3)
console.log('----------------');
pG(10, 1, 3)
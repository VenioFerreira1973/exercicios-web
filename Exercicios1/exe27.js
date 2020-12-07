/*Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.*/


verificaCrescimento = (crianca1, crianca2) => {

    let criancaMenor = crianca1.altura < crianca2.altura ? crianca1 : crianca2
    let criancaMaior = crianca1.altura > crianca2.altura ? crianca1 : crianca2

    let contaAnos = 0
    if (criancaMenor.taxaCrescimento > criancaMaior.taxaCrescimento) {
        while (criancaMenor.altura < criancaMaior.altura) {

            criancaMenor.altura = criancaMenor.altura + criancaMenor.taxaCrescimento
            criancaMaior.altura = criancaMaior.altura + criancaMaior.taxaCrescimento
            contaAnos++
        }
        return `${criancaMenor.nome} irá ultrapassar ${criancaMaior.nome} em  ${contaAnos} anos.`

    } else {
        return `${criancaMenor.nome} não irá ultrapassar ${criancaMaior.nome} , pois tem taxa de crescimento menor.` 
        
    }

}

const crianca1 = {
    nome: 'Isabel',
    altura: 150,
    taxaCrescimento: 2
}

const crianca2 = {
    nome: 'Lucas',
    altura: 130,
    taxaCrescimento: 4
}

console.log(verificaCrescimento(crianca1, crianca2))

function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if(altura1 == altura2){
        if (taxa1 > taxa2) {
            return 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if(taxa1 < taxa2) {
            return 'A criança 2 ultrapassará a criança 1 em 1 ano.'
        }else{
            return 'As crianças tem igual altura e crescimento.'
        }
    } else {
        if (altura1 > altura2) {
            if(taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura2, taxa2, altura1, taxa1) 
            }
        } else {
            if(taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior.'
            }else{
               return calcularTempo(altura1, taxa1, altura2, taxa2) 
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior){
    let qtdAnos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qtdAnos++
    }
    console.log(qtdAnos)
    return qtdAnos
}

//console.log(calcularCrescimento(150, 2, 130, 4));
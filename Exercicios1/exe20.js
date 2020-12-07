/*Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.*/

retornaTroco = (valor) => {

    let resto100 = 0
    let resto50 = 0
    let resto10 = 0
    let resto5 = 0
    let resposta = ''

    if (valor >= 100) {
        if (valor % 100 == 0) {
            resposta = resposta + ' ' + valor / 100 + ' nota(s) de R$ 100.'
        } else {
            resposta = resposta + ' ' + (valor - (valor % 100)) / 100 + ' nota(s) de R$ 100.'
            resto100 = valor % 100
        }

        if (resto100 > 50 && resto100 != 0) {
            if (resto100 % 50 == 0) {
                resposta = resposta + ' ' + resto100 / 50 + ' nota(s) de R$ 50.'
            } else {
                resposta = resposta + ' ' + (resto100 - (resto100 % 50)) / 50 + ' nota(s) de R$ 50.'
                resto50 = resto100 % 50
            }
        } else {
            resto50 = resto100 % 50

        }
        if (resto50 > 10 && resto50 != 0) {
            if (resto50 % 10 == 0) {
                resposta = resposta + ' ' + resto50 / 10 + ' nota(s) de R$ 10.'
            } else {
                resposta = resposta + ' ' + (resto50 - (resto50 % 10)) / 10 + ' nota(s) de R$ 10.'
                resto10 = resto50 % 10
            }
        } else {
            resto10 = resto50 % 10
        }
        if (resto10 > 5 && resto10 != 0) {
            if (resto10 % 5 == 0) {
                resposta = resposta + ' ' + resto10 / 5 + ' nota(s) de R$ 5.'
            } else {
                resposta = resposta + ' ' + (resto10 - (resto10 % 5)) / 5 + ' nota(s) de R$ 5.'
                resto5 = resto10 % 5
            }
            if (resto5 < 5 && resto5 != 0) {
                resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
            }
        } else {
            resto5 = resto10 % 5
            resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
        }
    } else if (valor >= 50) {
        if (valor % 50 == 0) {
            resposta = resposta + ' ' + valor / 50 + ' nota(s) de R$ 50.'
        } else {
            resposta = resposta + ' ' + (valor - (valor % 50)) / 50 + ' nota(s) de R$ 50.'
            resto50 = valor % 50

            if (resto50 > 10 && resto50 != 0) {
                if (resto50 % 10 == 0) {
                    resposta = resposta + ' ' + resto50 / 10 + ' nota(s) de R$ 10.'
                } else {
                    resposta = resposta + ' ' + (resto50 - (resto50 % 10)) / 10 + ' nota(s) de R$ 10.'
                    resto10 = resto50 % 10
                }
            } else {
                resto10 = resto50 % 10
            }
            if (resto10 > 5 && resto10 != 0) {
                if (resto10 % 5 == 0) {
                    resposta = resposta + ' ' + resto10 / 5 + ' nota(s) de R$ 5.'
                } else {
                    resposta = resposta + ' ' + (resto10 - (resto10 % 5)) / 5 + ' nota(s) de R$ 5.'
                    resto5 = resto10 % 5
                }
                if (resto5 < 5 && resto5 != 0) {
                    resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
                }
            } else {
                resto5 = resto10 % 5
                resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
            }
        }


    } else if (valor >= 10) {
        if (valor % 10 == 0) {
            resposta = resposta + ' ' + valor / 10 + ' nota(s) de R$ 10.'
        } else {
            resposta = resposta + ' ' + (valor - (valor % 10)) / 10 + ' nota(s) de R$ 10.'
            resto10 = valor % 10
            if (resto10 > 5 && resto10 != 0) {
                if (resto10 % 5 == 0) {
                    resposta = resposta + ' ' + resto10 / 5 + ' nota(s) de R$ 5.'
                } else {
                    resposta = resposta + ' ' + (resto10 - (resto10 % 5)) / 5 + ' nota(s) de R$ 5.'
                    resto5 = resto10 % 5
                }
                if (resto5 < 5 && resto5 != 0) {
                    resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
                }
            } else {
                resto5 = resto10 % 5
                resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
            }
        }

    } else if (valor >= 5) {
        if (valor % 5 == 0) {
            resposta = resposta + ' ' + valor / 5 + ' nota(s) de R$ 5.'
        } else {
            resposta = resposta + ' ' + (valor - (valor % 5)) / 5 + ' nota(s) de R$ 5.'
            resto5 = valor % 5

            if (resto5 < 5 && resto5 != 0) {
                resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
            }
        }

    } else if (valor < 5 && resto5 != 0) {
        resposta = resposta + ' ' + valor + ' nota(s) de R$ 1.'
    } else {
        resposta = resposta + ' ' + valor + ' nota(s) de R$ 1.'
    }
    return resposta

}

/*console.log(retornaTroco(18))
console.log(retornaTroco(1839))
console.log(retornaTroco(103))
console.log(retornaTroco(10))
console.log(retornaTroco(1))
console.log(retornaTroco(20))
console.log(retornaTroco(2))*/
//console.log(retornaTroco(1020267))

function sacarDinheiro(valorSaque) {
    let contador100 = 0
    let contador50 = 0
    let contador10 = 0
    let contador5 = 0
    let contador1 = 0
    let valorNota = calcularValorNota(valorSaque)
    while (valorSaque >= valorNota) {
        switch (valorNota) {
            case 100:
                valorSaque -= 100
                contador100++
                break
            case 50:
                valorSaque -= 50
                contador50++
                break
            case 10:
                valorSaque -= 10
                contador10++
                break
            case 5:
                valorSaque -= 5
                contador5++
                break
            case 1:
                contador1++
                valorSaque -= 1
                break
        }

        valorNota = calcularValorNota(valorSaque)

    }
    return elaborarResultado(contador100, contador50, contador10, contador5, contador1)
}

function calcularValorNota(valorSaque) {
    if (valorSaque >= 100) {
        return 100
    } else if (valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}

function elaborarResultado(contador100, contador50, contador10, contador5, contador1) {
    let resultado = ''

    if (contador100 > 0) {
        resultado += `${contador100} nota(s) de R$ 100. `
    }

    if (contador50 > 0) {
        resultado += `${contador50} nota(s) de R$ 50. `
    }

    if (contador10 > 0) {
        resultado += `${contador10} nota(s) de R$ 10. `
    }

    if (contador5 > 0) {
        resultado += `${contador5} nota(s) de R$ 5. `
    }

    if (contador1 > 0) {
        resultado += `${contador1} nota(s) de R$ 1. `
    }

    return resultado
}

//console.log(sacarDinheiro(1020267));


retornaTroco2 = (valor) => {

    let resto100 = 0
    let resto50 = 0
    let resto10 = 0
    let resto5 = 0
    let resposta = ''

    while (valor > 0) {
        if (valor >= 100) {
            if (valor % 100 == 0) {
                resposta = resposta + ' ' + valor / 100 + ' nota(s) de R$ 100.'
                valor = 0
            } else {
                resposta = resposta + ' ' + (valor - (valor % 100)) / 100 + ' nota(s) de R$ 100.'
                resto100 = valor % 100
                valor = valor%100
            }

            if (resto100 > 50 && resto100 != 0) {
                if (resto100 % 50 == 0) {
                    resposta = resposta + ' ' + resto100 / 50 + ' nota(s) de R$ 50.'
                    valor = 0
                } else {
                    resposta = resposta + ' ' + (resto100 - (resto100 % 50)) / 50 + ' nota(s) de R$ 50.'
                    resto50 = resto100 % 50
                    valor = resto100 % 50
                }
            } else {
                resto50 = resto100 % 50

            }
            if (resto50 > 10 && resto50 != 0) {
                if (resto50 % 10 == 0) {
                    resposta = resposta + ' ' + resto50 / 10 + ' nota(s) de R$ 10.'
                    valor = 0
                } else {
                    resposta = resposta + ' ' + (resto50 - (resto50 % 10)) / 10 + ' nota(s) de R$ 10.'
                    resto10 = resto50 % 10
                    valor = resto50 % 10
                }
            } else {
                resto10 = resto50 % 10
                valor = resto50 % 10
            }
            if (resto10 > 5 && resto10 != 0) {
                if (resto10 % 5 == 0) {
                    resposta = resposta + ' ' + resto10 / 5 + ' nota(s) de R$ 5.'
                    valor = 0
                } else {
                    resposta = resposta + ' ' + (resto10 - (resto10 % 5)) / 5 + ' nota(s) de R$ 5.'
                    resto5 = resto10 % 5
                    valor = resto50 % 5
                }
                if (resto5 < 5 && resto5 != 0) {
                    resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
                    valor = 0
                }
            } else {
                resto5 = resto10 % 5
                resposta = resposta + ' ' + resto5 + ' nota(s) de R$ 1.'
                valor = 0
            }
        }
    }
    return resposta
}

console.log(retornaTroco2(16666))
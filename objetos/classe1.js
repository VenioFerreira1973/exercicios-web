class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    
    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }

    listarLancamentos(){
        let listaLancamentos = []
        this.lancamentos.forEach(l => { listaLancamentos.push(`${l.nome} ------------------- Valor: ${l.valor}`)
        })
        return listaLancamentos
    }

}

const salario = new Lancamento('Salario', 4500)
const contaDeLuz = new Lancamento('Luz', -220)
const contaDeAgua = new Lancamento('Agua', -140)
const teste = new Lancamento()

const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz, contaDeAgua, teste)
console.log(contas.sumario())
console.log(contas.listarLancamentos())
const sequencia = {
    _valor: 1, //convenção (a variável será acessada apenas internamente neste código)
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {//regra de negocio opcional
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor, sequencia.valor)

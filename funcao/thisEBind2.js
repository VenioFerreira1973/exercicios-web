function Pessoa1(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
}

function Pessoa2(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

function Pessoa3(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000)
}

function Pessoa4(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}


new Pessoa1//este caso demonstra que o objeto Pessoa instânciado no contexto atual não é reconhecido no contexto do metodo setInterval imprimindo NaN
new Pessoa2//este caso o programa funciona como esperado
new Pessoa3//este caso o programa funciona como esperado pois com a criação da constante self o this sempre irá apontar para o objeto instanciado
new Pessoa4//este caso demonstra o uso de função arrow que funciona como esperado pois as funções arrow mantem o this dentro do contexto do objeto instanciado
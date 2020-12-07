function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico - this
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = 'Velocidade Máxima Atingida'
        }
    }
    //metodo publico - this - para tornar o método privado da função poderia ser usado o let ou const
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log('Uno velocidade atual: ' + uno.getVelocidadeAtual())

const ferrari = new Carro(350, 50)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log('Ferrari velocidade atual: ' + ferrari.getVelocidadeAtual())

console.log(typeof Carro)//carro é uma função neste caso trazendo para a visão de orientação a objetos é uma classe
console.log(typeof ferrari)//ferrari é um objeto - que foi instanciado na classe (function) Carro
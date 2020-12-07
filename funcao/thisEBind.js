const pessoa = {
    saudacao1: 'Bom Dia!',
    saudacao2: 'Boa Tarde!',
    saudacao3: 'Boa Noite!',
    falar(){
        console.log(this.saudacao1)
    },
    falar1(hora){
        if (hora < '12:00:00') {
            console.log(this.saudacao1)
        } else if(hora > '12:00:00' && hora < '18:00:00') {
            console.log(this.saudacao2)
        } else {
            console.log(this.saudacao3)
        }
        
    }
}



// Pegar do horário atual
var t = new Date()
var hora = t.getHours() + ':' + t.getMinutes() + ':' + t.getSeconds()

pessoa.falar1('09:00:00')//Bom dia!
pessoa.falar1('13:00:00')//Boa tarde!
pessoa.falar1('22:00:00')//Boa noite!


pessoa.falar()//Bom dia! 

const falar = pessoa.falar
falar() //undefined

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa() //Bom dia!

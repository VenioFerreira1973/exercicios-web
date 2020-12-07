/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A     10%
B     15%
C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.*/

calculaSalario = (salarioAtual, planoAumento) => {
    switch (planoAumento) {
        case 'A':
            return salarioAtual + ((salarioAtual * 10) / 100)
        case 'B':
            return salarioAtual + ((salarioAtual * 15) / 100)
        case 'C':
            return salarioAtual + ((salarioAtual * 20) / 100)
        default:
            return 'Plano Inválido!'
    }
}


console.log('Novo salário: R$', calculaSalario(5000, 'A'))
console.log('Novo salário: R$',calculaSalario(6000, 'B'))
console.log('Novo salário: R$',calculaSalario(15000, 'C'))
console.log('Novo salário: R$',calculaSalario(50000, 'D'))
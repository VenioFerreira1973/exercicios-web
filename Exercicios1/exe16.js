/*Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

calculadora = (n1, oper, n2) => {

    switch (oper) {
        case '+':
            return n1 + n2
        case '-':
            return n1 - n2
        case '*':
            return n1 * n2
        case '/':
            if(n2 > 0){
                return n1 / n2
            } else {
                return 'Divisão por zero!'
            }
        default:
            return 'Operação Inválida!'
    }
}


console.log(calculadora(2,'+', 4))
console.log(calculadora(4,'-', 2))
console.log(calculadora(2,'*', 4))
console.log(calculadora(4,'/', 2))
console.log(calculadora(2,'/', 0))
console.log(calculadora(2,'$', 4))

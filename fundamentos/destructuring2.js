const [a] = [10]
console.log(a) //exibe o numero 10, estou simplesmente pegando o valor de dentro do array e atribuindo à variavel a

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


const [, [,nota1, nota2]] = [[,8,8],[9,6,8]]
console.log(nota1, nota2)//o destructuring permite ignorar certos elementos de um array maior por exemplo se vc precisar fazer uma especie de busca por determinado valor
//no caso deste exemplo eu quis pegar apenas as notas do segundo array dentro do array maior ignorando elementos e até mesmo o primeiro array

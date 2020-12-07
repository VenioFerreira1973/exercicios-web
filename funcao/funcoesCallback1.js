const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice +1}. ${nome}`)
}
//para cada elemento do array o forEach vai chamar a função imprimir e imprimir o indice e o nome
fabricantes.forEach(imprimir)

//para cara elemento do array o forEach imprime o nome do fabricante
fabricantes.forEach(fabricante => console.log(fabricante))


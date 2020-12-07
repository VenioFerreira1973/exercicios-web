const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})


//passando o array como terceiro parametro
aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

//a função callback passada para o forEach admite no máximo 3 parametros um quarto parametro será retornado como undefined
aprovados.forEach(function(nome, indice, array, qualquer){
    console.log(`${indice + 1}) ${nome}`)
    console.log(qualquer)
})



//fazendo a mesma coisa de outra forma
aprovados.forEach(nome = (nome, indice)=> console.log(indice + 1 + ')', nome))

//pegando apenas o indice - é obrigatório passar o primeiro parametro "nome"
aprovados.forEach(nome = (nome, indice)=> console.log(indice))

//imprimindo apenas os nomes
aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
const funcs = []

for (let i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//neste caso como esperado o javascript retorna 2 e 8 respectivamente, pois a variavel foi declarada com o tipo let que guarda na memória os valores adicionados no array mesmo fora do bloco 
funcs[2]()
funcs[8]()


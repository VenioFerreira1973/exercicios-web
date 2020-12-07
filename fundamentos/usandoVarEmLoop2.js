const funcs = []

for (var i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

//em ambos os casos o javascript retorna 10 pois a variavel foi declarada com o tipo var que não tem escopo de função 
funcs[2]()
funcs[8]()


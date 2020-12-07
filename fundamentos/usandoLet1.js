let numero = 1
{
    //console.log('antes = ', numero) tentar imprimir neste local da erro pois dentro do bloco a variavel não foi declarada ainda
    let numero2 = 2
    console.log('dentro = ', numero)//neste caso o javascript pega a variavel declarada fora do bloco pois é a única que ele consegue identificar
    console.log('dentro = ', numero2)
}

console.log('fora = ', numero)
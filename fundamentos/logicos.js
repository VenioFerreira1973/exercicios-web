function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2//ou exclusivo se os dois forem diferentes retorna true
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)//bitwise xor - outra forma de fazer o ou exclusivo
    const manterSaudavel = !comprarSorvete//operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}//desta forma o retorno será um objeto com o resultado das 4 operações lógicas
    //na atualização do java script em 2015 ficou possível definir um objeto conforme acima
    /*
    {comprarSorvete: comprarSorvete, 
        comprarTv50: comprarTv50, 
        comprarTv32: comprarTv32,
        manterSaudavel: manterSaudavel}*/ //antes de 2015 obrigatoriamente era desta forma
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
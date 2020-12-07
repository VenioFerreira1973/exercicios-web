function area(largura, altura){
    const area = largura * altura
    if (area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,17,22,44))
console.log(area(5,5))//retorna além da mensagem undefined, pois o console.log não tem o que mostrar pois a função não retornou qualquer valor
const nums = [1,2,3,4,5,6,7,8,9,10]
/*
for (let x in nums){
    if(x == 5) {
        break //este break está controlando a execução do for não do if
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if(y == 5){
        continue //interrompe a execução somente quando a comparação for verdadeira e continua para a proxima 
    }
    console.log(`${y} = ${nums[y]}`)
}
*/
for (a in nums){
    interno: for(b in nums){
        if (a == 4 && b == 5) break interno //executa até encontrar o par 4,5 e pula para o par 5,0 e continua a execução
        console.log(`Par = ${a}, ${b}`)
    } 
}

externo: for (a in nums){
    for(b in nums){
        if (a == 4 && b == 5) break externo //sem o break externo ele executa até encontrar o par 4,5 e pula para o par 5,0 e continua a execução
        console.log(`Par = ${a}, ${b}`)
    } 
}

console.log('Fim')
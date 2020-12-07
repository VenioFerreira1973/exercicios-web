/*Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

conceitoNota = (vetorNotas) => {

    let conceitoObj = {
        nota: [],
        conceito: []
    }

    for (let i = 0; i < vetorNotas.length; i++) {
    
        if(vetorNotas[i] >= 0.0 && vetorNotas[i] <= 4.9){
            conceitoObj.conceito.push('D')
            conceitoObj.nota.push(vetorNotas[i])
            //conceitos.push(conceitoObj)
        } else if (vetorNotas[i] >= 5.0 && vetorNotas[i] <= 6.9){
            conceitoObj.conceito.push('C')
            conceitoObj.nota.push(vetorNotas[i])
            //conceitos.push(conceitoObj)
        } else if (vetorNotas[i] >= 7.0 && vetorNotas[i] <= 8.9){
            conceitoObj.conceito.push('B')
            conceitoObj.nota.push(vetorNotas[i])
            //conceitos.push(conceitoObj)
        } else if (vetorNotas[i] >= 9.0 && vetorNotas[i] <= 10.0){
            conceitoObj.conceito.push('A')
            conceitoObj.nota.push(vetorNotas[i])
        } else {
            conceitoObj.conceito.push('Nota Inválida!')
            conceitoObj.nota.push(vetorNotas[i])
        }
    }
    
    return conceitoObj
}


let conceitos = conceitoNota([1.2,4.5,6.7,8.0,9.0,9.0,2.3,11.1,4.7,6.2])

for (let i = 0; i< conceitos.nota.length; i++){
    console.log(`${conceitos.nota[i]} - ${conceitos.conceito[i]}`)
}



function conceituarNotas(notas) {
    let conceitos = []
    for(let i = 0; i < notas.length; i++) {
        if(notas[i]>=0 && notas[i]<=4.9){
            conceitos.push('D')
        } else if(notas[i]>=5 && notas[i]<=6.9) {
            conceitos.push('C')            
        } else if(notas[i]>=7 && notas[i]<=8.9) {
            conceitos.push('B')
        } else if(notas[i]>=9 && notas[i]<=10){
            conceitos.push('A')
        } else {
            conceitos.push('Nota inválida')       
       }
    }
    return conceitos
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
//let vetorConceitos = conceituarNotas(notas)

//console.log(vetorConceitos)
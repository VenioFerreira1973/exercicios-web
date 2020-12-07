function teste1(num){
    if(num > 7)
    console.log(num)//será executada somente se a condição for verdadeira
    
    console.log('Final')//sempre será executada
}

//teste1(6)
//teste1(8)

function teste2(num){
    if(num > 7);//executa nada
    
    { 
        console.log(num)//sempre é executado independentemente do if
    }
}

teste2(6)
teste2(8)
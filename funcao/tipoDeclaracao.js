//function declaration - este tipo de declaração permite que ela seja chamada em qualquer lugar do código inclusive antes da declaração
function soma(x,y){
    return x + y
}

//function expression - este tipo de declaração permite a chamada da função somente após a declaração
const sub = function(x,y){
    return x - y
}

//named function expression - este tipo de declaração permite a chamada da função somente após a declaração
const mult = function mult(x,y){
    return x * y
}


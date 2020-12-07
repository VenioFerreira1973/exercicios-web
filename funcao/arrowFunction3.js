let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)// ao alterar um contexto usando o bind em uma função tradicional o mesmo é alterado

comparaComThis(global) //o contexto deixou de ser o globel e passou a ser obj - este chamada resulta em false
comparaComThis(obj)// esta chamada resulta em true

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

//o module.exports e o this são equivalentes
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)//o bind tenta mudar o contexto do objeto global para obj MAS em funções arrow o contexto é mantido no this
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

jurosSimples = (capitalInicial, taxaJuros, tempoAplicacao) => {
    let capitalRetorno = 0
    for (let i = 0; i < tempoAplicacao; i++){
        capitalRetorno = capitalRetorno + (capitalInicial * taxaJuros)
    }
    return capitalInicial + capitalRetorno
}

jurosComposto = (capitalInicial, taxaJuros, tempoAplicacao) => {

    for (let i = 0; i < tempoAplicacao; i++){
        capitalInicial = capitalInicial + (capitalInicial * taxaJuros)
    }
    return capitalInicial
    
}



function jurosSimples1 (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos1 (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log('Aplicação a Juros Simples: ', 'R$' + jurosSimples(1000, 0.0028, 3))
console.log('Aplicação a Juros Compostos: ', 'R$' + jurosComposto(121500, 0.0028, 12))
console.log('Aplicação a Juros Simples: ', 'R$' + jurosSimples1(1000, 0.0028, 3))
console.log('Aplicação a Juros Compostos: ', 'R$' + jurosCompostos1(121500, 0.0028, 12))
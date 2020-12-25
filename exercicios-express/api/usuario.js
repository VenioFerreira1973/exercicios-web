function salvar(req, res){
    res.send('Usuário > salvar')
}

function obter(req, res){
    res.send('Usuario > obter')
}

module.exports = {salvar, obter}
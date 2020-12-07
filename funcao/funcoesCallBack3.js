// Exemplo de callback para se executar no browser - basta copiar o código no F12 e clicar na tela a mensagem será exibida
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!')
}
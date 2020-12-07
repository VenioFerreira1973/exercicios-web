

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


function Barreira(reversa = false) {
    this.elemento = novoElemento('div', 'barreira')

    const borda = novoElemento('div', 'borda')
    const corpo = novoElemento('div', 'corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)

    this.setLargura = largura => corpo.style.width = `${largura}px`
}

function ParDeBarreiras(largura, abertura, y) {

    this.elemento = novoElemento('div', 'par-de-barreiras')

    this.esquerda = new Barreira(true)
    this.direita = new Barreira(false)

    this.elemento.appendChild(this.esquerda.elemento)
    this.elemento.appendChild(this.direita.elemento)

    this.sortearAbertura = () => {
        const larguraEsquerda = Math.random() * (largura - abertura)
        const larguraDireira = largura - abertura - larguraEsquerda
        this.esquerda.setLargura(larguraEsquerda)
        this.direita.setLargura(larguraDireira)
    }
    this.getY = () => parseInt(this.elemento.style.top.split('px')[0])
    this.setY = y => this.elemento.style.top = `${y}px`
    this.getAltura = () => this.elemento.clientHeight

    this.sortearAbertura()
    this.setY(y)
}


function Barreiras(largura, altura, abertura, espaco, notificarPonto, velocidade) {
    this.pares = [
        new ParDeBarreiras(largura, abertura, altura - espaco * 4),
        new ParDeBarreiras(largura, abertura, altura - espaco * 3),
        new ParDeBarreiras(largura, abertura, altura - espaco * 2),
        new ParDeBarreiras(largura, abertura, altura - espaco)

    ]

    //const deslocamento = velocidade.getVelocidade()//velocidades das barreiras quanto maior o número mais rápida a transição
    this.animar = () => {
        this.pares.forEach(par => {
            par.setY(par.getY() + velocidade.getVelocidade())

            //quando o elemento sair da área do jogo
            if (par.getY() - 400 > par.getAltura()) {
                par.setY(par.getY() - espaco * this.pares.length)
                par.sortearAbertura()
            }
            const meio = altura / 2
            const cruzouOMeio = par.getY() + velocidade.getVelocidade() >= meio
                && par.getY() < meio
            if (cruzouOMeio) {
                notificarPonto()
            }
        })
    }

}

function myKeyPress(e) {

    var keynum;

    if (window.event) { // IE                 
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                  
        keynum = e.which;
    }
    return (String.fromCharCode(keynum));
}

function Explosao(explosao) {
    this.elemento = novoElemento('img', 'explosao')
    this.elemento.src = 'imgs/explosao.png'

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`

    this.setX(explosao)
}

function Aviao(posicao) {

    this.elemento = novoElemento('img', 'aviao')
    this.elemento.src = 'imgs/migg.png'

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left = `${x}px`

    let limiteEsquerdo = posicao - 580
    let limiteDireito = posicao + 510
    let direita = false
    let esquerda = false
    this.setX(posicao)

    this.animar = () => {

        window.onkeypress = e => {
            let tecla = myKeyPress(e)

            if (tecla === '/') {

                direita = true
                let novoX = this.getX() + (direita ? 55 : -55) //velocidade do aviao */            

                if (novoX <= limiteDireito) {
                    this.setX(novoX)
                } else {
                    this.setX(limiteDireito)
                }

            } else if (tecla === '\\') {

                esquerda = true
                let novoX = this.getX() + (esquerda ? -50 : 50) //velocidade do aviao */

                if (novoX >= limiteEsquerdo) {
                    this.setX(novoX)
                } else {
                    this.setX(limiteEsquerdo)
                }
            }
        }
    }

}


function Velocidade() {

    this.aumentarVelocidade = pontos => {

        if (pontos === 0) {
            this.velocidade = 10
        } else if (pontos % 4 === 0) {
            this.velocidade++
        }
    }

    this.getVelocidade = () => { return this.velocidade }
    this.setVelocidade = velocidade => this.velocidade = velocidade

}

function Progresso() {

    this.velocidade = new Velocidade()
    this.elemento = novoElemento('span', 'progresso')
    this.atualizarPontos = pontos => {
        this.elemento.innerHTML = pontos
        this.velocidade.aumentarVelocidade(pontos)
    }
    this.atualizarPontos(0)

}

function Ajuda() {

    this.elemento = novoElemento('div', 'help')
    this.elemento.innerHTML = 'Help'

    this.mostrarAjuda = areaDoJogo => {

        const help = document.querySelector('.help')
        help.style.cursor = 'pointer'

        if (help) {
            help.onclick = e => {
                if (e.buttons === 0) {
                    this.elemento = novoElemento('div', 'helpWindow')
                    this.elemento.innerHTML = 'Use as teclas \\ e / para se desviar dos obstaculos!<br> A cada 4 barreiras ultrapassadas a velocidade aumenta!'
                    areaDoJogo.appendChild(this.elemento)
                    this.fecharAjuda(areaDoJogo, this.elemento)

                }
            }
        }
    }
    this.fecharAjuda = (areaDoJogo, helpWindow) => {
        helpWindow.style.cursor = 'pointer'

        if (helpWindow) {
            helpWindow.onclick = e => {
                if (e.buttons === 0) {
                    areaDoJogo.removeChild(helpWindow)
                }
            }
        }
    }
}

function estaoSobrepostos(elementoA, elementoB) {
    const a = elementoA.getBoundingClientRect()
    const b = elementoB.getBoundingClientRect()

    const colidiu =
        a.left < b.left + b.width &&
        a.left + a.width > b.left &&
        a.top - a.height * 2.25 < b.top &&
        a.top > b.top - b.height * 2.25

    return colidiu
}

function colidiu(aviao, barreiras) {

    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if (!colidiu) {
            const esquerda = parDeBarreiras.esquerda.elemento
            const direita = parDeBarreiras.direita.elemento

            colidiu = estaoSobrepostos(aviao.elemento, esquerda)
                || estaoSobrepostos(aviao.elemento, direita)

        }
    })
    return colidiu
}

function StartButton() {

    this.elemento = novoElemento('div', 'startButton')
    this.elemento.innerHTML = 'Start'

    this.startButton = (obstacles) => {

        const start = document.querySelector('.startButton')
        start.style.cursor = 'pointer'

        if (start) {
            start.onclick = e => {
                if (e.buttons === 0) {
                    obstacles.start()
                }
            }
        }

    }
}


function Obstacles() {

    const areaDoJogo = document.querySelector('[wm-aviao]')

    const largura = areaDoJogo.clientWidth
    const altura = areaDoJogo.clientHeight - 690

    const ajuda = new Ajuda()
    const startButton = new StartButton()

    areaDoJogo.appendChild(ajuda.elemento)
    ajuda.mostrarAjuda(areaDoJogo)
    areaDoJogo.appendChild(startButton.elemento)
    startButton.startButton(this)

    this.start = () => {      
        let pontos = 0 

        const progresso = new Progresso()
        const aviao = new Aviao((largura - 10) / 2)

        areaDoJogo.appendChild(progresso.elemento)
        areaDoJogo.appendChild(aviao.elemento)

        const barreiras = new Barreiras(largura, altura, 350, 800,
            () => progresso.atualizarPontos(++pontos), progresso.velocidade)

        barreiras.pares.forEach(par => areaDoJogo.appendChild(par.elemento))

        //loop do jogo
        const temporizador = setInterval(() => {
            barreiras.animar()
            aviao.animar()

            if (colidiu(aviao, barreiras)) {
                const explosao = new Explosao(aviao.getX())
                areaDoJogo.appendChild(explosao.elemento)

                barreiras.pares.forEach(par => areaDoJogo.removeChild(par.elemento))
                areaDoJogo.removeChild(aviao.elemento)

                const temp = setInterval(() => {
                    areaDoJogo.removeChild(explosao.elemento)
                    /* progresso.atualizarPontos(0) */
                    areaDoJogo.removeChild(progresso.elemento)
                    clearInterval(temp)
                }, 2000)

                clearInterval(temporizador)
            }
        }, 20)
    }

}

new Obstacles()



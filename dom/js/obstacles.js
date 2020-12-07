function newElement(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}


function Barrier(reverse = false) {
    this.element = newElement('div', 'barrier')

    const edge = newElement('div', 'edge')
    const body = newElement('div', 'body')
    this.element.appendChild(reverse ? body : edge)
    this.element.appendChild(reverse ? edge : body)

    this.setBarrierWidth = barrierWidth => body.style.width = `${barrierWidth}px`
}

function BarrierPair(barrierWidth, breach, y) {

    this.element = newElement('div', 'pair-of-barriers')

    this.left = new Barrier(true)
    this.rigth = new Barrier(false)

    this.element.appendChild(this.left.element)
    this.element.appendChild(this.rigth.element)

    this.drawBreach = () => {
        const barrierWidthLeft = Math.random() * (barrierWidth - breach)
        const barrierWidthRigth = barrierWidth - breach - barrierWidthLeft
        this.left.setBarrierWidth(barrierWidthLeft)
        this.rigth.setBarrierWidth(barrierWidthRigth)
    }
    this.getY = () => parseInt(this.element.style.top.split('px')[0])
    this.setY = y => this.element.style.top = `${y}px`
    this.getBarrierHeigth = () => this.element.clientHeight

    this.drawBreach()
    this.setY(y)
}


function Barriers(barrierWidth, barrierHeigth, breach, espace, notifyPoint, Speed) {
    this.pairs = [
        new BarrierPair(barrierWidth, breach, barrierHeigth - espace * 4),
        new BarrierPair(barrierWidth, breach, barrierHeigth - espace * 3),
        new BarrierPair(barrierWidth, breach, barrierHeigth - espace * 2),
        new BarrierPair(barrierWidth, breach, barrierHeigth - espace)

    ]

    this.animate = () => {
        this.pairs.forEach(pair => {
            pair.setY(pair.getY() + Speed.getSpeed())

            //where the element out of game area
            if (pair.getY() - 400 > pair.getBarrierHeigth()) {
                pair.setY(pair.getY() - espace * this.pairs.length)
                pair.drawBreach()
            }
            const meio = barrierHeigth / 2
            const crossMiddle = pair.getY() + Speed.getSpeed() >= meio
                && pair.getY() < meio
            if (crossMiddle) {
                notifyPoint()
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

function Explosion(explosion) {
    this.element = newElement('img', 'explosion')
    this.element.src = 'imgs/explosion.png'

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`

    this.setX(explosion)
}

function Airplane(position) {

    this.element = newElement('img', 'airplane')
    this.element.src = 'imgs/migg.png'

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`

    let limiteEsquerdo = position - 580
    let limiteDireito = position + 510
    let rigth = false
    let left = false
    this.setX(position)

    this.animate = () => {

        window.onkeypress = e => {
            let tecla = myKeyPress(e)

            if (tecla === '/') {

                rigth = true
                let novoX = this.getX() + (rigth ? 55 : -55) //Speed do airplane */            

                if (novoX <= limiteDireito) {
                    this.setX(novoX)
                } else {
                    this.setX(limiteDireito)
                }

            } else if (tecla === '\\') {

                left = true
                let novoX = this.getX() + (left ? -50 : 50) //Speed do airplane */

                if (novoX >= limiteEsquerdo) {
                    this.setX(novoX)
                } else {
                    this.setX(limiteEsquerdo)
                }
            }
        }
    }

}


function Speed() {

    this.increaseSpeed = points => {

        if (points === 0) {
            this.speed = 10
        } else if (points % 4 === 0) {
            this.speed++
        }
    }

    this.getSpeed = () => { return this.speed }
    this.setSpeed = speed => this.speed = speed

}

function Progress() {

    this.speed = new Speed()
    this.element = newElement('span', 'progress')
    this.updatePoints = points => {
        this.element.innerHTML = points
        this.speed.increaseSpeed(points)
    }
    this.updatePoints(0)

}

function Help() {

    this.element = newElement('div', 'help')
    this.element.innerHTML = 'Help'

    this.showHelp = gameArea => {

        const help = document.querySelector('.help')
        help.style.cursor = 'pointer'

        if (help) {
            help.onclick = e => {
                if (e.buttons === 0) {
                    this.element = newElement('div', 'helpWindow')
                    this.element.innerHTML = 'Use the \\ and / keys to dodge obstacles! <br> With every 4 Barriers overtaking, Speed ​​increases!'
                    gameArea.appendChild(this.element)
                    this.fecharHelp(gameArea, this.element)

                }
            }
        }
    }
    this.fecharHelp = (gameArea, helpWindow) => {
        helpWindow.style.cursor = 'pointer'

        if (helpWindow) {
            helpWindow.onclick = e => {
                if (e.buttons === 0) {
                    gameArea.removeChild(helpWindow)
                }
            }
        }
    }
}

function overlapping(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const collided =
        a.left < b.left + b.width &&
        a.left + a.width > b.left &&
        a.top - a.height * 2.25 < b.top &&
        a.top > b.top - b.height * 2.25

    return collided
}

function collided(airplane, barriers) {

    let collided = false
    barriers.pairs.forEach(barrierPair => {
        if (!collided) {
            const left = barrierPair.left.element
            const rigth = barrierPair.rigth.element

            collided = overlapping(airplane.element, left)
                || overlapping(airplane.element, rigth)

        }
    })
    return collided
}

function StartButton() {

    this.element = newElement('div', 'startButton')
    this.element.innerHTML = 'Start'

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

    const gameArea = document.querySelector('[obstacles]')

    const barrierWidth = gameArea.clientWidth
    const barrierHeigth = gameArea.clientHeight - 690

    const help = new Help()
    const startButton = new StartButton()

    gameArea.appendChild(help.element)
    help.showHelp(gameArea)
    gameArea.appendChild(startButton.element)
    startButton.startButton(this)

    this.start = () => {      
        let points = 0 

        const progress = new Progress()
        const airplane = new Airplane((barrierWidth - 10) / 2)

        gameArea.appendChild(progress.element)
        gameArea.appendChild(airplane.element)

        const barriers = new Barriers(barrierWidth, barrierHeigth, 350, 800,
            () => progress.updatePoints(++points), progress.Speed)

        barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))

        //loop of game
        const timer = setInterval(() => {
            barriers.animate()
            airplane.animate()

            if (collided(airplane, barriers)) {
                const explosion = new Explosion(airplane.getX())
                gameArea.appendChild(explosion.element)

                barriers.pairs.forEach(pair => gameArea.removeChild(pair.element))
                gameArea.removeChild(airplane.element)

                const temp = setInterval(() => {
                    gameArea.removeChild(explosion.element)
                    gameArea.removeChild(progress.element)
                    clearInterval(temp)
                }, 2000)

                clearInterval(timer)
            }
        }, 20)
    }

}

new Obstacles()



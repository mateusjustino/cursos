var diryJ, dirxJ, jog, velJ, pjx, pjy
var velT
var tamTelaW, tamTelaH
var jogo
var frames

function teclaDw() {
    var tecla = event.keyCode
    if (tecla == 38) { //cima
        diryJ = -1
    }
    else if (tecla == 40) { //baixo
        diryJ = 1
    }
    if (tecla == 37) { //esquerda
        dirxJ = -1
    }
    else if (tecla == 39) { // direita
        dirxJ = 1
    }
    if (tecla == 32) { //espaço // tiro
        atira(pjx + 17, pjy)   // 17 para centralizar o tiro no gif
    }
}
function teclaUp() {
    var tecla = event.keyCode
    if ((tecla == 38) || (tecla == 40)) { //cima ou baixo
        diryJ = 0
    }    
    if ((tecla == 37) || (tecla == 39)){ //esquerda
        dirxJ = 0
    }
}

function criaBomba() {
    if (jogo) {
        var y = 0
        var x = Math.random()*tamTelaW
        var bomba = document.createElement('div')
        var att1 = document.createAttribute('class')
        var att2 = document.createAttribute('style')
        att1.value = 'bomba'
        att2.value = `top: ${y}px; left: ${x}px;`
        bomba.setAttributeNode(att1)
        bomba.setAttributeNode(att2)
    }
}

function atira(x, y) {
    var t = document.createElement('div')
    var att1 = document.createAttribute('class')
    var att2 = document.createAttribute('style')
    att1.value = 'tiroJog'
    att2.value = `top: ${y}px; left: ${x}px`
    t.setAttributeNode(att1)
    t.setAttributeNode(att2)
    document.body.appendChild(t)
}

function controleTiros() {
    var tiros = document.getElementsByClassName('tiroJog')
    var tam = tiros.length
    for (let i = 0; i < tam; i++) {
        if (tiros[i]) {
            var pt = tiros[i].offsetTop //offsetTop pega a posição atual em relação a top=0 da janela
            pt -= velT
            tiros[i].style.top = pt + 'px'
            if (pt < 0) {
                tiros[i].remove()
            }
        }
    }
}

function controlaJogador() {
    pjy += diryJ * velJ
    pjx += dirxJ * velJ
    jog.style.top = pjy + 'px'
    jog.style.left = pjx + 'px'
}

function gameLoop() {
    if (jogo) {
        // funções do controle
        controlaJogador()
        controleTiros()
    }
    frames.requestAnimationFrame(gameLoop)
}

function inicia() {
    jogo = true

    //ini tela
    tamTelaH = window.innerHeight
    tamTelaW = window.innerWidth
    
    //ini jogador
    dirxJ = diryJ = 0
    pjx = tamTelaW / 2
    pjy = tamTelaH / 2
    velJ = velT = 5
    jog = document.getElementById('navJog')
    jog.style.top = pjy + 'px'
    jog.style.left = pjx + 'px'

    gameLoop()
}

window.addEventListener('load', inicia)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)
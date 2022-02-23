var diryJ, dirxJ, jog, velJ, pjx, pjy
var velT
var tamTelaW, tamTelaH
var jogo
var frames
var contBombas, painelContBombas, velB, tmpCriaBomba
var bombasTotal
var vidaPlaneta
var ie, isom

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
        document.body.appendChild(bomba)
        contBombas --
    }
}

function controlaBomba() {
    bombasTotal = document.getElementsByClassName('bomba')
    var tam = bombasTotal.length
    for (let i = 0; i < tam; i++) {
        if (bombasTotal[i]) {
            var pi = bombasTotal[i].offsetTop
            pi += velB
            bombasTotal[i].style.top = pi + 'px'
            if (pi > tamTelaH) {
                vidaPlaneta -= 10
                criaExplosao(2, bombasTotal[i].offsetLeft, null)
                bombasTotal[i].remove()
            }
        }
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
            colisaoTiroBomba(tiros[i])
            if (pt < 0) {
                tiros[i].remove()
            }
        }
    }
}

function colisaoTiroBomba(tiro) {
    var tam = bombasTotal.length
    for (let i = 0; i < tam; i++) {
        if (bombasTotal[i]) {
            if (
                (
                    (tiro.offsetTop <= (bombasTotal[i].offsetTop + 40)) && //parte de cima do tiro com a parte de baixo da bomba
                    ((tiro.offsetTop + 6) >= (bombasTotal[i].offsetTop)) //parte de baixo do tiro com a parte de cima da bomba
                )
                &&
                (
                    (tiro.offsetLeft <= (bombasTotal[i].offsetLeft + 24)) && // parte esquerda do tiro com a parte direita da bomba
                    ((tiro.offsetLeft + 6) >= (bombasTotal[i].offsetLeft)) // parte direita do tiro com a parte esquerda da bomba
                )
            ) {
                criaExplosao(1, bombasTotal[i].offsetLeft - 25, bombasTotal[i].offsetTop)
                bombasTotal[i].remove()
                tiro.remove()
            }
        }
    }
}

function criaExplosao(tipo, x, y) { //tipo 1 = ar, 2 = terra
    if (document.getElementById('explosao' + (ie - 1))) {
        document.getElementById('explosao' + (ie - 1)).remove()
    }

    var explosao = document.createElement('div')
    var img = document.createElement('img')
    var som = document.createElement('audio')
    //atributos para div
    var att1 = document.createAttribute('class')
    var att2 = document.createAttribute('style')
    var att3 = document.createAttribute('id')
    //atributos para img
    var att4 = document.createAttribute('src')
    //atributos para audio
    var att5 = document.createAttribute('src')
    var att6 = document.createAttribute('id')

    att3.value = 'explosao' + ie
    if (tipo == 1) {
        att1.value = 'explosaoAr'
        att2.value = `top: ${y}px; left: ${x}px;`
        att4.value = 'explosao_ar.gif?' + new Date()
    }
    else{
        att1.value = 'explosaoChao'
        att2.value = `top: ${tamTelaH - 57}px; left: ${x - 17}px;`
        att4.value = 'explosao_chao.gif'
    }
    att5.value = 'exp1.mp3'
    att6.value = 'som' + isom
    explosao.setAttributeNode(att1)
    explosao.setAttributeNode(att2)
    explosao.setAttributeNode(att3)
    img.setAttributeNode(att4)
    som.setAttributeNode(att5)
    som.setAttributeNode(att6)
    explosao.appendChild(img)
    explosao.appendChild(som)
    document.body.appendChild(explosao)
    document.getElementById('som' + isom).play()
    
    ie++
    isom++

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
        controlaBomba()
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

    //controles das bombas
    contBombas = 150
    velB = 3
    tmpCriaBomba = setInterval(criaBomba, 1700)

    //controles do planeta
    vidaPlaneta = 300

    //controles de explosao
    ie = isom = 0


    gameLoop()
}

window.addEventListener('load', inicia)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)
var simboloDaVez = 'xis'
var bloco11Check, bloco12Check, bloco13Check, bloco21Check, bloco22Check, bloco23Check, bloco31Check, bloco32Check, bloco33Check
var rodadas = 0

function posiciona() {
    var top = 100
    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.position = 'relative'
            obj.style.top = top+'px'
            obj.style.left = '100px'
            top -= 95
        }
    }

    top = -712.5   // para deixar o Y no centro do bloco
    var left = 172.5
    for (let i = 1; i < 3; i++) {
        obj = document.getElementById('coluna'+[i])
        obj.style.position = 'relative'
        obj.style.left = left + "px"
        obj.style.top = top  +'px'        
        obj.style.transform = 'rotate(90deg)'
        obj.style.transition = 'all 1s'
        // pra proxima coluna
        top -=5
        left -= 100
    }

    top = -770
    for (let i = 1; i < 3; i++) {
        obj = document.getElementById('linha'+[i])
        obj.style.position = 'relative'
        obj.style.left = '122.5px'
        obj.style.top = top+'px'
        obj.style.transition = 'all 1s'
        top += 95
    }
}
posiciona()
    

function start() {

    rodadas = 0
    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'pointer'
            obj.setAttribute('onclick', 'marcar'+[c]+[l]+'()')            
            document.getElementById('bloco'+[c]+[l]).onmouseover = function () {

                this.style.transition = 'background-color 0.5s'
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.5)'
            }
            document.getElementById('bloco'+[c]+[l]).onmouseout = function () {
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.2)'
                this.style.transition = 'background-color 1s'

            }
        }
    }

    var bloco11 = document.getElementById('bloco11')
    bloco11.style.transform = 'translate(-100px, -100px)'

    var bloco12 = document.getElementById('bloco12')
    bloco12.style.transform = 'translate(0px, -100px)'

    var bloco13 = document.getElementById('bloco13')
    bloco13.style.transform = 'translate(100px, -100px)'

    var bloco21 = document.getElementById('bloco21')
    bloco21.style.transform = 'translate(-100px, 0px)'

    var bloco22 = document.getElementById('bloco22')
    bloco22.style.transform = 'translate(0px, 0px)'

    var bloco23 = document.getElementById('bloco23')
    bloco23.style.transform = 'translate(100px, 0px)'

    var bloco31 = document.getElementById('bloco31')
    bloco31.style.transform = 'translate(-100px, 100px)'

    var bloco32 = document.getElementById('bloco32')
    bloco32.style.transform = 'translate(0px, 100px)'

    var bloco33 = document.getElementById('bloco33')
    bloco33.style.transform = 'translate(100px, 100px)'

    
    var coluna1 = document.getElementById('coluna1')
    coluna1.style.width = '295px'
    coluna1.style.left = '50px'
    coluna1.style.top = '-710px'

    var coluna2 = document.getElementById('coluna2')
    coluna2.style.width = '295px'
    coluna2.style.left = '-50px'
    coluna2.style.top = '-715px'

    var linha1 = document.getElementById('linha1')
    linha1.style.width = '295px'
    linha1.style.left = '0px'

    var linha2 = document.getElementById('linha2')
    linha2.style.width = '295px'
    linha2.style.left = '0px'

    var obj = document.getElementById('btnIniciar')
    obj.setAttribute('onclick', 'back()')   
    obj.innerHTML = 'PARAR'  


}

function back() {

    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'default'
            obj.style.transition = 'all 1s'
            obj.setAttribute('onclick', '')
            obj.style.backgroundColor = 'rgba(128, 0, 128, 0.2)'

            /* verifica se existe antes*/
            var obj = document.getElementById('div'+[c]+[l])
            if (obj != null){
                var div = document.querySelector('#div'+[c]+[l])
                div.parentNode.removeChild(div)
            }
            var obj = document.getElementById('div'+[c]+[l])
            if (obj != null){
                var div = document.querySelector('#div'+[c]+[l])
                div.parentNode.removeChild(div)
            }
        }
    }

    var bloco11 = document.getElementById('bloco11')
    bloco11.style.transform = 'translate(0px, 0px)'

    var bloco12 = document.getElementById('bloco12')
    bloco12.style.transform = 'translate(0px, 0px)'

    var bloco13 = document.getElementById('bloco13')
    bloco13.style.transform = 'translate(0px, 0px)'

    var bloco21 = document.getElementById('bloco21')
    bloco21.style.transform = 'translate(0px, 0px)'

    var bloco22 = document.getElementById('bloco22')
    bloco22.style.transform = 'translate(0px, 0px)'

    var bloco23 = document.getElementById('bloco23')
    bloco23.style.transform = 'translate(0px, 0px)'

    var bloco31 = document.getElementById('bloco31')
    bloco31.style.transform = 'translate(0px, 0px)'

    var bloco32 = document.getElementById('bloco32')
    bloco32.style.transform = 'translate(0px, 0px)'

    var bloco33 = document.getElementById('bloco33')
    bloco33.style.transform = 'translate(0px, 0px)'

    var coluna1 = document.getElementById('coluna1')
    coluna1.style.width = '50px'
    coluna1.style.left = '172.5px'
    coluna1.style.top = '-712px'

    var coluna2 = document.getElementById('coluna2')
    coluna2.style.width = '50px'
    coluna2.style.left = '75px'
    coluna2.style.top = '-715px'

    var linha1 = document.getElementById('linha1')
    linha1.style.width = '50px'
    linha1.style.left = '122.5px'

    var linha2 = document.getElementById('linha2')
    linha2.style.width = '50px'
    linha2.style.left = '122.5px'

    var obj = document.getElementById('btnIniciar')
    obj.setAttribute('onclick', 'start()')   
    obj.innerHTML = 'INICIAR'  
}



function marcar(blocoSelecionado) {    

    
    var bloco = document.getElementById('bloco'+blocoSelecionado)

    if (simboloDaVez == 'xis') {
        /* se é x */
        var div1 = document.createElement('div')
        div1.setAttribute('id', 'div' + blocoSelecionado)
        div1.setAttribute('class', 'marcax1')
        bloco.appendChild(div1)


        var div2 = document.createElement('div')
        div2.setAttribute('id', 'div' + blocoSelecionado)
        div2.setAttribute('class', 'marcax2')
        bloco.appendChild(div2)

        checar()
        simboloDaVez = 'bolinha'

    }
    else{
        /* ou bolinha */
        var div = document.createElement('div')
        div.setAttribute('id', 'div' + blocoSelecionado)
        div.setAttribute('class', 'bolinha')
        bloco.appendChild(div)

        checar()
        simboloDaVez = 'xis'
    }

    


}


function checar() {

    if (bloco11Check == simboloDaVez && bloco12Check == simboloDaVez && bloco13Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }
    if (bloco21Check == simboloDaVez && bloco22Check == simboloDaVez && bloco23Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }
    if (bloco31Check == simboloDaVez && bloco32Check == simboloDaVez && bloco33Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }

    
    if (bloco11Check == simboloDaVez && bloco21Check == simboloDaVez && bloco31Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }
    if (bloco12Check == simboloDaVez && bloco22Check == simboloDaVez && bloco32Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }
    if (bloco13Check == simboloDaVez && bloco23Check == simboloDaVez && bloco33Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }

    if (bloco11Check == simboloDaVez && bloco22Check == simboloDaVez && bloco33Check == simboloDaVez){
        document.getElementById('teste').innerHTML = 'ganhouuuu'
    }
    
    rodadas += 1
    if (rodadas == 9){
        document.getElementById('teste').innerHTML = 'empate'
    }
    
}






function marcar11() {
    var obj = document.getElementById('div11')
    if (obj == null){
        bloco11Check = simboloDaVez
        marcar(11)
        
    }
}
function marcar12() {
    var obj = document.getElementById('div12')
    if (obj == null){
        bloco12Check = simboloDaVez
        marcar(12)
    }
}
function marcar13() {
    var obj = document.getElementById('div13')
    if (obj == null){
        bloco13Check = simboloDaVez
        marcar(13)
    }
}

function marcar21() {
    var obj = document.getElementById('div21')
    if (obj == null){
        bloco21Check = simboloDaVez
        marcar(21)
    }
}
function marcar22() {
    var obj = document.getElementById('div22')
    if (obj == null){
        bloco22Check = simboloDaVez
        marcar(22)
    }
}
function marcar23() {
    var obj = document.getElementById('div23')
    if (obj == null){
        bloco23Check = simboloDaVez
        marcar(23)
        
    }
}

function marcar31() {
    var obj = document.getElementById('div31')
    if (obj == null){
        bloco31Check = simboloDaVez
        marcar(31)
        
    }
}
function marcar32() {
    var obj = document.getElementById('div32')
    if (obj == null){
        bloco32Check = simboloDaVez
        marcar(32)
        
    }
}
function marcar33() {
    var obj = document.getElementById('div33')
    if (obj == null){
        bloco33Check = simboloDaVez
        marcar(33)
        
    }
}

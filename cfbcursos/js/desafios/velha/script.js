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

    for (let c = 1; c < 4; c++) {
        for (let l = 1; l < 4; l++) {
            obj = document.getElementById('bloco'+[c]+[l])
            obj.style.cursor = 'pointer'
            obj.setAttribute('onclick', 'marcar()')            
            document.getElementById('bloco'+[c]+[l]).onmouseover = function () {

                this.style.transition = 'background-color 0.5s'
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.5)'
            }
            document.getElementById('bloco'+[c]+[l]).onmouseout = function () {
                this.style.backgroundColor = 'rgba(128, 0, 128, 0.2)'
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

}

function marcar() {
    this.style.backgroundColor = 'red'
}
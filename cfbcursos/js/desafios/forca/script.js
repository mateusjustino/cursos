var tamanho, palavra, erros, acertos

var forca = document.getElementById('forca')
forca.style.visibility = 'hidden'

var btnConfirmarPalavra = document.getElementById('btnConfirmarPalavra')
btnConfirmarPalavra.addEventListener('click', confirmaPalavra)

function confirmaPalavra() {
    forca.style.visibility = 'visible'
    palavra = document.getElementById('txtPalavra').value.trim()
    erros = 0
    acertos = 0
    aparecerPalavra()
    var divLetrasErradas = document.getElementById('letrasErradas')
    divLetrasErradas.innerHTML = 'Letras erradas:'

    
    var cabeca = document.getElementById('cabeca')
    cabeca.style.visibility = 'hidden'
    var tronco = document.getElementById('tronco')
    tronco.style.visibility = 'hidden'
    var bracoEsquerdo = document.getElementById('bracoEsquerdo')
    bracoEsquerdo.style.visibility = 'hidden'
    var bracoDireito = document.getElementById('bracoDireito')
    bracoDireito.style.visibility = 'hidden'
    var pernaEsquerda = document.getElementById('pernaEsquerda')
    pernaEsquerda.style.visibility = 'hidden'
    var pernaDireita = document.getElementById('pernaDireita')
    pernaDireita.style.visibility = 'hidden'
    var olhos = document.getElementById('olhos')
    olhos.style.visibility = 'hidden'

    document.getElementById('txtEscolheLetra').disabled = false
    document.getElementById('btnConfirmarLetra').disabled = false
    
}

function aparecerPalavra() {
    var divPalavraNaForca = document.getElementById('palavraNaForca')
    divPalavraNaForca.innerHTML = ''

    for (let i = 0; i < palavra.length; i++) {      

        if (palavra.charAt(i) == ' '){
            var paragrafo = document.createElement('p')
            var letra = document.createTextNode('⠀')  /*⠀*/
            paragrafo.appendChild(letra)
            paragrafo.setAttribute('id', 'p' + [i])
            paragrafo.setAttribute('class', 'letrasClassVazia')   
            divPalavraNaForca.appendChild(paragrafo)
        }
        else{
            var paragrafo = document.createElement('p')
            var letra = document.createTextNode('⠀')  /*⠀*/
            paragrafo.appendChild(letra)
            paragrafo.setAttribute('id', 'p' + [i])
            paragrafo.setAttribute('class', 'letrasClass')   
            divPalavraNaForca.appendChild(paragrafo)
        }
    }
}

var btnConfirmarLetra = document.getElementById('btnConfirmarLetra')
btnConfirmarLetra.addEventListener('click', verificarLetra)

function verificarLetra() {    
    var letraEscolhida = document.getElementById('txtEscolheLetra').value

    if (letraEscolhida.length != 0){

        var checkAcerto = 0
        for (let i = 0; i < palavra.length; i++) {
            if (palavra.charAt(i).toUpperCase() == letraEscolhida.toUpperCase()) {
                var parafrago = document.getElementById('p'+[i])
                parafrago.innerHTML = palavra.charAt(i)
                checkAcerto = 1
                acertos += 1
            }          
              
        }

        if (acertos == palavra.length) {
            var forca = document.getElementById('forca')
            var paragrafo = document.createElement('h1')
            var texto = document.createTextNode('Você Ganhou!')
            paragrafo.appendChild(texto)
            forca.appendChild(paragrafo)

            document.getElementById('txtEscolheLetra').disabled = true
            document.getElementById('btnConfirmarLetra').disabled = true
        }

        if (checkAcerto == 0) {
            var divLetrasErradas = document.getElementById('letrasErradas')
            divLetrasErradas.innerHTML += ` ${letraEscolhida}...`
            erros += 1
            if (erros == 1) {
                var cabeca = document.getElementById('cabeca')
                cabeca.style.visibility = 'visible'
            }
            if (erros == 2) {
                var tronco = document.getElementById('tronco')
                tronco.style.visibility = 'visible'
            }
            if (erros == 3) {
                var bracoEsquerdo = document.getElementById('bracoEsquerdo')
                bracoEsquerdo.style.visibility = 'visible'
            }
            if (erros == 4) {
                var bracoDireito = document.getElementById('bracoDireito')
                bracoDireito.style.visibility = 'visible'
            }
            if (erros == 5) {
                var pernaEsquerda = document.getElementById('pernaEsquerda')
                pernaEsquerda.style.visibility = 'visible'
            }
            if (erros == 6) {
                var pernaDireita = document.getElementById('pernaDireita')
                pernaDireita.style.visibility = 'visible'
            }
            if (erros == 7) {
                var olhos = document.getElementById('olhos')
                olhos.style.visibility = 'visible'

                var forca = document.getElementById('forca')
                var paragrafo = document.createElement('h1')
                var texto = document.createTextNode('Você perdeu!')
                paragrafo.appendChild(texto)
                forca.appendChild(paragrafo)

                document.getElementById('txtEscolheLetra').disabled = true
                document.getElementById('btnConfirmarLetra').disabled = true

                
            }
            
        }

        document.getElementById('txtEscolheLetra').value = ''
        document.getElementById('txtEscolheLetra').focus
    }  
}

function umaLetra() {
    
    var txt = document.getElementById('txtEscolheLetra')
    
    if (txt.value.length > 0) {
        txt.value = txt.value.charAt(1)
    }
    
}

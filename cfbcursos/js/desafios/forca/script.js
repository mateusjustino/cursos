var tamanho, palavra, teste

teste = document.getElementById('testeDiv') /* essa variavel vou tirar, só para testes */

var forca = document.getElementById('forca')
forca.style.display = 'none'

var btn = document.getElementById('btnConfirmarPalavra')
btn.addEventListener('click', confirmaPalavra)

function confirmaPalavra() {
    forca.style.display = 'block'
    palavra = document.getElementById('txtPalavra').value.trim()
    aparecerPalavra()
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

function verificarLetra() {
    
}

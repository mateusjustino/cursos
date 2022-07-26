from os import cpu_count


frase = 'o rato roeu a roupa do rei de roma'
tamanhoFrase = len(frase)
print(tamanhoFrase, '\n')

novaString = ''

contador = 0
'''
while contador < tamanhoFrase: #inteirando a string
    print(frase[contador], contador)
    contador +=1
'''

'''
while contador < tamanhoFrase:  #acrecenstando letra a letra em uma nova string    
    novaString += frase[contador]
    print(novaString)
    contador +=1
'''

'''
while contador < tamanhoFrase:  #Sempre que tiver a letra R na frase, ela fica maiuscula
    letra = frase[contador]
    if letra == 'r':
        novaString += 'R'
    else:
        novaString += letra    
    contador +=1
print(novaString)
'''

letraDigitada = input('Digite uma letra: ')
while contador < tamanhoFrase:  #
    letra = frase[contador]
    if letra == letraDigitada:
        novaString += letraDigitada.upper()
    else:
        novaString += letra    
    contador +=1
print(novaString)



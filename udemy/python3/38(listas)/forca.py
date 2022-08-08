secreto = 'perfume'
digitadas = []
chances = 3

while True:
    if chances < 0:
        print('Voce perdeu! Acabou as chances')
        break
    
    letra = input('Digite uma letra: ')

    if ((len(letra)) > 1):
        print('Apenas uma letra!')
        continue

    digitadas.append(letra)

    if letra in secreto:
        print(f'A letra é "{letra}", tem na palavra secreta.')
    else:
        print(f'A letra é "{letra}", não tem na palavra secreta')
        digitadas.pop()
        chances -= 1
        print(f'Voce ainda tem mais {chances + 1} chance(s)')
    
    secretoTemporario = ''
    for letraScreta in secreto:
        if letraScreta in digitadas:
            secretoTemporario += letraScreta
        else:
            secretoTemporario += '*'
        
    if secretoTemporario == secreto:
        print(f'Voce ganhou! a palavra é: {secretoTemporario}')
        break
    else:
        print(f'A palavra secreta é: {secretoTemporario}')

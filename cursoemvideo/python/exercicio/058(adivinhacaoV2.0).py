from random import randint
from time import sleep
escolhidoPC = randint(0, 10)
print('-=-' * 20)
print('                  Jogo da advinhação')
print('-=-' * 20)
numeroUser = int(input('Descubra o numero escolhido pelo computador (de 0 a 10): '))
print('Processando...')
sleep(1)  #---- faz com que espere 1 segundos antes de continuar
tentativas = 1
while escolhidoPC != numeroUser:
    if escolhidoPC > numeroUser:
        print('Mais... Tente outra vez')
    else:
        print('Menos... Tente outra vez')
    tentativas += 1
    numeroUser = int(input('Descubra o numero (de 0 a 10): '))
    sleep(1)
print('\nAcertou! foram necessárias {} tentativas,'.format(tentativas))

print('\nou assimmmmmmmmmmmmmmm\n')

computador = randint(0, 10)
print('Sou seu computador... Acabei de pensar em um número entre 0 e 10')
print('Será que você consegue advinhar qual foi? ')
acertou = False
while not acertou:
    jogador = int(input('Qual é seu palpite? '))
    if jogador == computador:
        acertou = True
    else:
        if jogador < computador:
            print('Mais... Tente mais uma vez')
        else:
            print('Menos... Tente mais uma vez')
print('Acertou!')
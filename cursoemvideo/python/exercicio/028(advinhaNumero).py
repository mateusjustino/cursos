from random import randint
from time import sleep
escolhidoPC = randint(0, 5)
print('-=-' * 20)
print('                  Jogo da advinhação')
print('-=-' * 20)
numeroUser = int(input('Descubra o numero escolhido pelo computador (de 0 a 5): '))
print('Processando...')
sleep(2)  #----------------------------------------------------- faz com que espere 2 segundos antes de continuar
if escolhidoPC == numeroUser:
    print('Acertou!')
    print('O computador escolheu {} e vc escolheu {}'.format(escolhidoPC, numeroUser))
else:
    print('Errou!')
    print('O computador escolheu {} e vc escolheu {}'.format(escolhidoPC, numeroUser))

from random import randint
from time import  sleep
itens = ('Pedra', 'Papel', 'Tesoura')
pcEscolhe = randint(0, 2)
print('''Suas opções
[ 0 ] Pedra
[ 1 ] Papel
[ 2 ] Tesoura''')
vcEscolhe = int(input('Qual é a sua jogada? '))
print('JO')
sleep(1)
print('KEN')
sleep(1)
print('PO!!')
print('-=-' * 9)
print('Computador jogou {}'.format(itens[pcEscolhe]))
print('Você jogou {}'.format(itens[vcEscolhe]))
print('-=-' * 9)

if pcEscolhe == 0: # pc jogou pedra
    if vcEscolhe == 0:
        print('Deu empate!')
    elif vcEscolhe == 1:
        print('Você ganhou!')
    elif vcEscolhe == 2:
        print('Computador ganhou!')
    else:
        print('Jogada inválida')
elif pcEscolhe == 1: # pc jogou papel
    if vcEscolhe == 0:
        print('Computador ganhou!')
    elif vcEscolhe == 1:
        print('Deu empate!')
    elif vcEscolhe == 2:
        print('Você ganhou!')
    else:
        print('Jogada inválida')
elif pcEscolhe == 2: # pc jogou tesoura
    if vcEscolhe == 0:
        print('Você ganhou!')
    elif vcEscolhe == 1:
        print('Computador ganhou!')
    elif vcEscolhe == 2:
        print('Deu empate!')
    else:
        print('Jogada inválida')
from time import sleep
from random import randint

print('=' * 40)
print('Joga na Mega Sena'.center(40))
print('=' * 40)

qtdeJogos = int(input('Quantos jogos vai querer: '))
print(f' Sorteando {qtdeJogos} jogos '.center(40, '='))

for x in range(0, qtdeJogos):
    sleep(0.5)
    lista = list()
    cont = 0
    while True:
        num = randint(1, 60)
        if num not in lista:
            lista.append(num)
            cont += 1
        if cont >= 6:
            break
    lista.sort()
    print(f'Jogo {x}: {lista}')
print(f' Boa Sorte! '.center(40, '='))
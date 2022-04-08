from random import randint


numeros = list()


def sorteio():
    for x in range(1, 6):
        numeros.append(randint(1, 10))
    print(f'Sorteando 5 valores: {numeros}')

sorteio()


def somaPar(lista):
    pares = 0
    for x in lista:
        if x % 2 == 0:
            pares += x
    print(f'Somando os valores pares de {lista}, temos {pares}')


somaPar(numeros)

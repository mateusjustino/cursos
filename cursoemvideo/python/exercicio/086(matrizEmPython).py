
matriz = list()
posicao = list()

contLinha = contColuna = 0

for x in range(1, 10):
    n = int(input(f'Digite um valor para [{contLinha}, {contColuna}]: '))

    posicao.append(contLinha)
    posicao.append(contColuna)
    posicao.append(n)

    matriz.append(posicao[:])
    posicao.clear()

    contColuna += 1
    if contColuna == 3:
        contColuna = 0
        contLinha += 1

print('.' * 30)
count = 1
for valor in matriz:
    if count < 3:
        print(f'[{valor[2]:^5}]', end='')
        count += 1
    else:
        print(f'[{valor[2]:^5}]')
        count = 1

print('ou assimmmmmmmmmmmmmm')

matrizNova = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
for l in range(0, 3):
    for c in range(0, 3):
        matrizNova[l][c] = int(input(f'Digite um valor para [{l}, {c}]: '))
print('~' * 30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{matriz[l][c]:^5}]', end='')
    print()


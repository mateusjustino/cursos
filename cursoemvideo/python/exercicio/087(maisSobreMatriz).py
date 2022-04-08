matriz = list()
posicao = list()

contLinha = contColuna = 0

somaPares = 0
somaTerceiraColuna = 0
maiorValorSegundaLinha = 0

for x in range(1, 10):
    n = int(input(f'Digite um valor para [{contLinha}, {contColuna}]: '))

    posicao.append(contLinha)
    posicao.append(contColuna)
    posicao.append(n)

    matriz.append(posicao[:])
    posicao.clear()

    if n % 2 == 0:
        somaPares += n

    if contColuna == 2:
        somaTerceiraColuna += n

    if contLinha == 1:
        if n > maiorValorSegundaLinha:
            maiorValorSegundaLinha = n

    contColuna += 1
    if contColuna == 3:
        contColuna = 0
        contLinha += 1

print('.' * 30)
count = 1
for valor in matriz:
    if count < 3:
        print(f'[ {valor[2]:^5} ]', end='')
        count += 1
    else:
        print(f'[ {valor[2]:^5} ]')
        count = 1

print('.' * 30)
print(f'A soma dos valores pares é {somaPares}')
print(f'A soma dos valores da terceira coluna é {somaTerceiraColuna}')
print(f'O maior valor da segunda linha é {maiorValorSegundaLinha}')


print('ou assimmmmmmmmmmmmm')

matrizNova = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
somaPares2 = maiorValorSegundaLinha2 = somaTerceiraColuna2 = 0
for l in range(0, 3):
    for c in range(0, 3):
        matrizNova[l][c] = int(input(f'Digite um valor para [{l}, {c}]: '))
print('~' * 30)
for l in range(0, 3):
    for c in range(0, 3):
        print(f'[{matriz[l][c]:^5}]', end='')
        if matrizNova[l][c] % 2 == 0:
            somaPares2 += matrizNova[l][c]
    print()
print('~' * 30)
print(f'A soma dos valores pares é {somaPares2}')
for l in range(0, 3):
    somaTerceiraColuna2 += matrizNova[l][2]
print(f'A soma dos valores da terceira coluna é {somaTerceiraColuna2}')
for c in range(0, 3):
    if c == 0:
        maiorValorSegundaLinha2 = matrizNova[1][c]
    elif matrizNova[1][c] > maiorValorSegundaLinha2:
        maiorValorSegundaLinha2 = matrizNova[1][c]
print(f'O maior valor da segunda linha é {maiorValorSegundaLinha2}')
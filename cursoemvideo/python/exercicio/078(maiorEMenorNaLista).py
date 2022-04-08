lista = []
maiorNumero = 0

menorNumero = 0

for x in range(0, 5):
    n = int(input(f'Digite um valor na Posição {x}: '))
    lista.append(n)
    if x == 0:
        maiorNumero = menorNumero = lista[x]
    else:
        if lista[x] > maiorNumero:
            maiorNumero = lista[x]
        if lista[x] < menorNumero:
            menorNumero = lista[x]

print(f'Você digitou os valores {lista}')
print(f'O maior valor digitado foi {maiorNumero} nas posições ', end='')
for posicao, valor in enumerate(lista):
    if valor == maiorNumero:
        print(f'{posicao}... ', end='')
print()
print(f'O menor valor digitado foi {menorNumero} nas posições ', end='')
for posicao, valor in enumerate(lista):
    if valor == menorNumero:
        print(f'{posicao}... ', end='')
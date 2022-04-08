a = int(input('Digite um valor: '))
b = int(input('Digite um valor: '))
c = int(input('Digite um valor: '))
d = int(input('Digite um valor: '))
numeros = a, b, c, d

print(f'\nVocê digitou os valores {numeros}')
print(f'O valor 9 apareceu {numeros.count(9)} vezes')
if 3 in numeros:
    print(f'O valor 3 apareceu na {numeros.index(3) + 1}ª posição')
else:
    print('O valor 3 não foi digitado em nenhuma posição')

somaPares = ''
for valor in numeros:
    divisao = valor % 2
    if divisao == 0:
        somaPares += '{} '.format(valor)

print(f'Os valores pares foram: {somaPares}')
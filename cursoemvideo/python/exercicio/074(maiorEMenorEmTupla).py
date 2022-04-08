from random import randint

numeros = randint(1, 9), randint(1, 9), randint(1, 9), randint(1, 9), randint(1, 9)

print(f'Os valores sorteados são: ', end='')
for variavel in numeros:
    print(f'{variavel} ', end='')

maior = ''
menor = ''

for item in numeros:
    if maior == '':
        maior = item
        menor = item

    if item > maior:
        maior = item
    if item < menor:
        menor = item

print(f'\nO maior valor é: {maior}')
print(f'O menor valor é: {menor}')
print('\nou fazer assim sem calculo, usando funcao da tupla\n')
print(f'O maior valor é: {max(numeros)}')
print(f'O menor valor é: {min(numeros)}')
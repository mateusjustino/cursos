numero = int(input('Digite um número entre 0 e 20: '))

while True:
    if numero < 0 or numero > 20:
        numero = int(input('Digite um número entre 0 e 20: '))
    else:
        break

lista = 'zero', 'um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito',\
        'nove', 'dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis',\
        'dezessete', 'dezoito', 'dezenove', 'vinte'

print(f'Você digitou o número {lista[numero]}')
numero = int(input('Digite um número: '))
dividir = numero % 2
if dividir == 0:
    print('O número {} é par!'.format(numero))
else:
    print('O número {} é impar!'.format(numero))

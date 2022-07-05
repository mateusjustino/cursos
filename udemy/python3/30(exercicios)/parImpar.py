from ast import If


numero = input('Digite um numero: ')

if numero.isdigit():
    if (int(numero) % 2) == 0:
        print('é par')
    else:
        print('é impar')
else:
    print('não é numero inteiro')
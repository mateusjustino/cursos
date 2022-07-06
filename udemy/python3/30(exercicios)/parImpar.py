
while True:

    numero = input('Digite um numero: ')

    if numero.isdigit():
        if (int(numero) % 2) == 0:
            print(f'{numero} é par')
        else:
            print(f'{numero} é impar')
    else:
        print('não é numero inteiro')
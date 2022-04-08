r1 = float(input('Digite o tamanho da primeira reta: '))
r2 = float(input('Digite o tamanho da segunda reta: '))
r3 = float(input('Digite o tamanho da terceira reta: '))

if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('É possivel fazer um triângulo')
    if r1 == r2 and r2 == r3:
        print('É um triângulo equilátero')
    elif r1 == r2 or r1 == r3 or r2 == r3:
        print('É um triângulo isósceles')
    else:
        print('É um triângulo escaleno')
else:
    print('O triângulo não pode ser feito')
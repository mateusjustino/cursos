n1 = float(input('Digite o primeiro valor: '))
n2 = float(input('Digite o segundo valor: '))

if n1 > n2:
    print('O primeiro valor({}) é maior que o segundo({})'.format(n1, n2))
elif n2 > n1:
    print('O segundo valor({}) é maior que o primeiro({})'.format(n2, n1))
else:
    print('Os dois valores({} e {}) são iguais'.format(n1, n2))
n = int(input('Digite um valor: '))

count = 1
f1 = 0
f2 = 1
print('~*~*~' * n)
while count <= n - 2:
    if f1 == 0:
        print(f1, '>', f2, end=' > ')
    f2 += f1
    f1 = f2 - f1
    count += 1
    print(f2, end=' > ')

print('Fim')
print('~*~*~' * n)
print('\nEsta foi a sequência de Fibonacci')

print('\n ou assimmmmmmmmmmmmm \n')

numero = int(input('Quantos termos você quer mostrar? '))
t1 = 0
t2 = 1
print('{} > {}'.format(t1, t2), end='')
cont = 3
while cont <= numero:
    t3 = t1 + t2
    print(' > {}'.format(t3), end='')
    t1 = t2
    t2 = t3
    cont += 1
print(' > Fim')
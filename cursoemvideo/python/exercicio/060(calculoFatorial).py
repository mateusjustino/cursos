from math import factorial
n = int(input('Digite um número para calcular seu Fatorial: '))
c = n
f = 1
print('Calculando {}! = '.format(n), end='')
while c > 0:
    print('{}'.format(c), end='')
    print(' x ' if c > 1 else ' = ', end='')
    f *= c
    c -= 1
print(f)

print('\n ou assim usando o For \n')

c = n
f = 1
print('Calculando {}! = '.format(n), end='')
for x in range(n , 0, -1):
    print('{}'.format(c), end='')
    print(' x ' if c > 1 else ' = ', end='')
    f *= c
    c -= 1
print(f)

print('\n ou assim usando o a biblioteca math com fatorial \n')
print(factorial(n))
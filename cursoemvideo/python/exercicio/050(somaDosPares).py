s = int(0)
for x in range(1, 7):
    n = int(input('Digite um valor: '))
    par = n % 2
    if par == 0:
        s += n
print('A soma dos números pares é {}'.format(s))
print('fim')

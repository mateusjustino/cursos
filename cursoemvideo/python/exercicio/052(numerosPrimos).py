nDigitado = int(input('Digite um número: '))
contagem = int(0)
for x in range(1, nDigitado + 1):
    if nDigitado % x == 0:
        print('\033[33m', end='')
        contagem += 1
    else:
        print('\033[31m', end='')
    print('{} '.format(x), end='')

print('\n\033[mO número {} foi divisível {} vezes'.format(nDigitado, contagem))

if contagem == 2:
    print('E por isso ele é primo!')
else:
    print('E por isso ele não é primo!')
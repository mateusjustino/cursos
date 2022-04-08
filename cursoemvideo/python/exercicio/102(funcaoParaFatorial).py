def fatorial(n, show=False):
    '''
    Calcula o Fatorial de um número
    :param n: o múmero a ser calculado
    :param show: (opcional) mostrar ou não a conta
    :return:
    '''
    f = 1
    for c in range(n, 0, -1):
        f *= c
        if show == True:
            if c == 1:
                print(f'{c} = ', end='')
            else:
                print(f'{c} * ', end='')

    print(f'{f}')

print('=-=' * 15)

fatorial(5, show=True)
print('=-=' * 15)

help(fatorial)

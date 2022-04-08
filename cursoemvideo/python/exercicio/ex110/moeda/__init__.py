def metade(n, formato=False):
    if formato:
        return moeda(n/2)
    else:
        return n/2


def dobro(n, formato=False):
    if formato:
        return moeda(n*2)
    else:
        return n*2


def aumentar(n, qtde, formato=False):
    if formato:
        return moeda(n / 100 * (100 + qtde))
    else:
        return n / 100 * (100 + qtde)


def diminuir(n, qtde, formato=False):
    if formato:
        return moeda(n / 100 * (100 - qtde))
    else:
        return n / 100 * (100 - qtde)


def moeda(n):
    return f'R$ {n:.2f}'.replace('.', ',')


def resumo(n=0, aumento=0, desconto=0):
    print('-' * 30)
    print('Resumo do Valor'.center(30))
    print('-' * 30)
    print(f'Preço analisado: \t{moeda(n)}')
    print(f'Dobro do preço: \t{dobro(n, True)}')
    print(f'Metade do preço: \t{metade(n, True)}')
    print(f'{aumento:>2}% de aumento: \t{aumentar(n, aumento, True)}')
    print(f'{desconto:>2}% de redução: \t{diminuir(n, desconto, True)}')
    print('-' * 30)

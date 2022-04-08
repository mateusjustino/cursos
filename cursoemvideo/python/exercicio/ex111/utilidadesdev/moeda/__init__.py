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


def resumo(n, aumento=0, desconto=0):
    print('-' * 30)
    print('Resumo do Valor'.center(30))
    print('-' * 30)
    print(f'Preço analisado:    {moeda(n)}')

    print(f'Dobro do preço:     {dobro(n, True)}')

    print(f'Metade do preço:    {metade(n, True)}')
    print(f'{aumento}% de aumento:     {aumentar(n, aumento, True)}')
    print(f'{desconto}% de redução:     {diminuir(n, desconto, True)}')
    print('-' * 30)

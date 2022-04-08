def metade(n, formato=False):
    return n/2 if formato is False else moeda(n/2)         # um outro jeito de se fazer


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



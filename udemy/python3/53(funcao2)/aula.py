def funcao(var):
    return var
    print('isso nao sera executado') # tudo dps do return nao vale nada

variavel = funcao('Valor que eu quero')

if variavel:
    print(variavel)
else:
    print('Nenhum valor')


def divisao(n1, n2):
    if n2 > 0:
        return n1 / n2

divide = divisao(8, 0)
if divide:
    print(divide)
else:
    print('conta invalida')


def dumb():
    return 1

print(dumb(), type(dumb()))
print(dumb(), type(dumb))

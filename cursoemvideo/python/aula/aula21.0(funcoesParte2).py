
help(print)          #da uma explicacao sobre o comando

print('\n','*' * 30, '\n')

def contador(i, f, p):
    '''
    -> Faz uma contagem e mostra na tela
    :param i: início da contagem
    :param f: fim da contagem
    :param p: passo da contagem
    :return: sem retorno
    '''
    c = i
    while c <= f:
        print(f'{c}', end='..')
        c += p
    print('Fim!')


contador(0, 100, 10)

help(contador)           #na função que eu criei, tbm foi criada uma explicação

print('\n','*' * 30, '\n')

def somar(a=0, b=0, c=0):             #parametros opcionais
    s = a + b + c
    print(f'A soma vale {s}')


somar(3, 2, 5)
somar(8, 4)
somar()
somar(c=4, a=2)



print('\n','*' * 30, '\n')

def teste():
    x = 8
    print(f'Na função teste, n vale {n}')
    print(f'Na função teste, x vale {x}')

n = 2
print(f'No programa principal, n vale {n}')
teste()

print('\n','*' * 30, '\n')


def teste2(b):
    global a
    a = 8
    b += 4
    c = 2
    print(f'A dentro vale {a}')
    print(f'B dentro vale {b}')
    print(f'C dentro vale {c}')


a = 5
print(a)
teste2(a)
print(f'A fora vale {a}')


print('\n','*' * 30, '\n')


def somar1(a=0, b=0, c=0):             #parametros opcionais
    s = a + b + c
    return s


r1 = somar1(3, 2, 5)
r2 = somar1(2, 2)
r3 = somar1(6)
print(f'Os resultados foram {r1}, {r2} e {r3}')

print('\n','*' * 30, '\n')


def fatorial(num=1):
    f = 1
    for c in range(num, 0, -1):
        f *= c
    return f


print(f'Os resultados são {fatorial(5)}, {fatorial(3)} e {fatorial()}')

print('\n','*' * 30, '\n')


def par(n=0):
    if n % 2 == 0:
        return True
    else:
        return False


print(f'O número 2 é par? {par(2)}, o número 7 é par? {par(7)}')
num = int(input('Digite um numero: '))
if par(num):
    print('É par')
else:
    print('Não é par')
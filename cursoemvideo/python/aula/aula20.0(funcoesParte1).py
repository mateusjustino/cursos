def linha():            #funcao sem parametro
    print('-' * 30)

linha()
print('Curso em Vídeo'.center(30))
linha()
print()
linha()
print('Aprenda Python'.center(30))
linha()
print()


def linhaMelhor(msg):         #funcao com parametro
    print('-' * 30)
    print(msg.center(30))
    print('-' * 30)

linhaMelhor('Sistema de alunos')


linha()
def soma(n1, n2):
    somados = n1 + n2
    print(f'O resultado da soma de {n1} + {n2 } é {somados}')

soma(3, 2)
soma(n2=5, n1=7)


linha()
def contador(* num):          #funcao sem limite de parametro
    print(num)

contador(2, 1, 7)
contador(8, 0)
contador(4, 4, 7, 6, 2)


linha()
def contador2(* num):
    for valor in num:
        print(f'{valor}', end='... ')
    print()

contador2(2, 1, 7)
contador2(8, 0)
contador2(4, 4, 7, 6, 2)


linha()
def contador3(* num):
    tam = len(num)
    print(f'Recei os valores {num} e são ao todo {tam} números')

contador3(2, 1, 7)
contador3(8, 0)
contador3(4, 4, 7, 6, 2)


linha()
def contador4(* num):
    s = 0
    for item in num:
        s += item
    print(f'Somando os valores {num} temos {s}')

contador4(2, 1, 7)
contador4(8, 0)
contador4(4, 4, 7, 6, 2)


linha()
def dobra(lst):
    pos = 0
    while pos < len(lst):
        lst[pos] *= 2
        pos += 1

valores = [6, 3, 9, 1, 0, 2]
dobra(valores)
print(valores)
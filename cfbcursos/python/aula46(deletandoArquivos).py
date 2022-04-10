import os

#pra criar
if os.path.exists('texto.txt'):
    print('Arquivo existente')
else:
    f = open('texto.txt', 'x')
    f.close()
    print('Arquivo criado')

#pra remover
if os.path.exists('texto.txt'):
    os.remove('texto.txt')
    print('Arquivo removido')
else:
    print('Arquivo nao existe')



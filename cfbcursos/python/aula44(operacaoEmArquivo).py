file = open('texto.txt', 'a')
# x - create - criar
# r - read - leitura
# a - append - anexar
# w - write - escrita         com w ele tbm cria caso nao exista
# t - texto
# b - binario

txt = input('Digite um texto: ')

file.write(f'{txt}\n')

file.close()



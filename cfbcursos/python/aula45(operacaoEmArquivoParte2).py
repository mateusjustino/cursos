import re

file = open('texto.txt', 'rt')

#print(file.read())        # le todo o arquivo
#print(file.read(11))      # le os 11 primeiros caracteres
#print(file.readline())     # le a primeira linha
#print(file.readline())     # em seguida le a proxima linha

#for l in file:            #faz um loop para ler linha por linha
#    print(l)

res = re.sub(' ', '-', file.readline())                         #nao modifiquei o arquivo, salvei a linha do arquivo em uma string e manipulei
file.close()

print(res)

file = open('texto.txt', 'wt')
file.write(res)
file.close()




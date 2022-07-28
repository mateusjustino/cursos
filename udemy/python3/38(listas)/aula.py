#         0       1      2    3    4
lista = ['A', 'Bacana', 'C', 'd', 10.5]
#    -    5       4      3    2    1 

print(lista) #lista completa
print(lista[1]) #indice 1 da lista
print(lista[-1]) #idice -1 (ultimo) da lista
print(lista[0:3]) #do 0 até o indice 3
print(lista[:3]) #por padrao começa do inicio até o 3
print(lista[3:]) #por padrao vai do 3 até o fim
print(lista[::-1]) #inverte a ordem dos itens

l1 = [1, 2, 3]
l2 = [4, 5, 6]
l3 = l1 + l2

print()
print(l1)
print(l2)
print(l3)

print()
l1.extend(l2) #extende os itens da l1 com a l2
print(l1)

print()
l2.append('b') #adiciona um item ao fim da lista
print(l2)

print()
l2.insert(2, 'cebola') #insere o item cebola na posicao 2
print(l2)

print()
l2.pop(1) #deleta o item no indice 1
print(l2)

print()
del(l2[1]) #deleta o item no indice 1
print(l2)

#parei no minuto 25 -----------------------------------
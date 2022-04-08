lanche = ['burguer', 'suco', 'pizza', 'pudim']
print(lanche[3])
lanche[3] = 'sorvete'    #subtitui o terceiro item
print(lanche[3])
lanche.append('cookie')     #adiciona um item
print(lanche)
lanche.insert(0, 'cachorro')      #adiciona um item em uma posição especifica
print(lanche)

#del lanche[3]        #tanto o del como o pop remove o item especifico pela posição
#lanche.pop(3)
lanche.remove('pizza')     #o remove deleta digitando o valor do item
print(lanche)

valores = list(range(4, 11))     #uma lista com os numeros do range
print(valores)

valores1 = [8, 2, 5, 4, 9, 3, 0]
valores1.sort()      #para ordenar os itens
print(valores1)
valores1.sort(reverse=True)      #na ordem reversa
print(valores1)
print(len(valores1))

for v in valores1:
    print(f'{v}... ', end='')
for chave, valores in enumerate(valores1):
    print(f'Na posição {chave} encontrei o valor {valores}')

valores2 = list()
for cont in range(0, 5):
    valores2.append(int(input('Digite um valor: ')))
print(valores2)

a = [2, 3, 4, 7]
b = a
b[2] = 8          #quando se iguala duas listas elas ficam ligadas,
print(a)                  # se alterar o valor de uma altera da outra tbm
print(b)

c = [2, 3, 4, 7]
d = c[:]          #usando esse fatiamento o B só copia os itens do A
d[2] = 8
print(c)
print(d)
lanche = 'hamburguer', 'suco', 'pizza', 'pudim'
print(lanche)
print(lanche[1])     #escolhe o lanche 1
print(lanche[-2])    #escolhe o lanche contando de tras pra frente
print(lanche[1:3])   #escolhe do lanche 1 até antes de chegar no 3
print(lanche[2:])    #escolhe do lanche 2 pra frente
print(lanche[:2])    #escolhe até antes de chegar no lanche 2
print(lanche[-2:])   #escolhe o lanche de tras pra frente do -2 pra frente

print(len(lanche))

print('\n')
for cont in range(0, len(lanche)):
    print(f'Eu vou comer {lanche[cont]}, na posição {cont}')

print('\n')
for comida in lanche:
    print(f'Eu vou comer {comida}')

print('\n')
for pos, comida in enumerate(lanche):
    print(f'Eu vou comer {comida}, na posição {pos}')

print(sorted(lanche))  #ordem alfabetica

a = 2, 5, 4
b = 5, 8, 1, 2
c = a + b
d = b + a
print('\n', c)
print(d)
print(c.count(5))     #conta quantas vezes aparece o 5
print(c.index(8))     #mostra posicao do numero 8
print(d.index(5, 1))  #comeca a procurar o numero 5 depois da posicao 1

pessoa = 'gustavo', 39, 'M', 99
del(pessoa)             #para deletar uma tupla
print('\n', pessoa)
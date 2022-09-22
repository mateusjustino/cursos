t1 = 1, 2, 3  # tuplas diferentes de listas são imutaveis

print(type(t1))

t2 = 4, 5, 6
t3 = t1 + t2

print(t3)

n1, n2, n3, *_, n10 = t3 # *_ meio que serve pra pegar todo resto ali e deixar o que quiser pro final, tipo o n10 pegando o ultimo numero da tupla
print(n10)

t1 = (1, 2, 'Mateus', 4, 5) * 20 # repete 20 vezes o que tem na tupla
print(t1)

t1 = (1, 2, 3, 4, 5) # tupla nao pode mudar
t1 = list(t1) # aqui transformo a tupla em lista
t1[1] = 3 # aqui mudo a lista
t1 = tuple(t1) # aqui transformo a lista em tupla
print(t1)
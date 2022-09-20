def funcao(arg, arg2): # função tradicional
    return arg * arg2

var = funcao(2, 2)
print(var)

print('------------------------------------------')

a = lambda x, y: x * y # função anonima

print(a(2, 2))

print('------------------------------------------')

lista = [
    ['P1', 13],
    ['P2', 6],
    ['P3', 7],
    ['P4', 50],
    ['P5', 8]
]

def func(item):
    return item[1]

lista.sort(key=func) # aqui ordena atraves da função, na função disse pra ordenar pelo item 1, que seria os valores...
print(lista)

print('------------------------------------------')

lista.sort(key=lambda item: item[1]) # aqui eu ordeno do mesmo jeito mas com a função lambda, deixa mais curto o processo
print(lista)
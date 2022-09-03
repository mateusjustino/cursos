nome = input('Seu nome? ')

print(nome or None or False or 0 or 'nao digitou nada' or 'outra coisa')

a = 0
b = None
c = False
d = []
e = {}
f = 22
g = 'Mateus'

variavel = a or b or c or d or e or f or g

print(variavel)
from math import hypot
co = float(input('Qual o valor do cateto oposto: '))
ca = float(input('Qual o valor do cateto adjacente: '))
print('A hipotenusa vale {:.2f}'.format(hypot(co, ca)))

#sem importar o math
hi = (co ** 2 + ca ** 2) ** (1/2)
print('A hipotenusa vale {:.2f}'.format((hi)))

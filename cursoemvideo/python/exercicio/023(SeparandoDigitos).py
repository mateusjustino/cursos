'''
print('Manipulando por texto')
n = '23'
print('A unidade é:', n[3])
print('A dezena é:', n[2])
print('A centena é:', n[1])
print('A milhar é:', n[0])
'''

print('\n')

#pode ser assim
print('Manipulando por cálculos')
numero = 23
# o simbolo de % mostra apenas o resto da divisao
unidade = numero % 10
print('A unidade é:', unidade)
dezena = ((numero - unidade) / 10) % 10
print('A dezena é: {:.0f}'.format(dezena))
centena = ((numero - dezena) / 100) % 10
print('A centena é: {:.0f}'.format(centena))
milhar = ((numero - centena) / 1000) % 10
print('A milhar é: {:.0f}'.format(milhar))

#ou assim
u = numero // 1 % 10
d = numero // 10 % 10
c = numero // 100 % 10
m = numero // 1000 % 10
print('\n')
print('A unidade é :', u)
print('A dezena é :', d)
print('A centena é :', c)
print('A milhar é :', m)
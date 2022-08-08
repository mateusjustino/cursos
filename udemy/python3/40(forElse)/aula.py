

variavel = ['Mateus', 'Joao', 'Maria']
for valor in variavel:
    print(valor)
    if valor.startswith('M'): #checa se começa com a letra citada
        print(f'Começa com M: {valor}')
    else:
        print('Não começa com m')

comecaComM = False
for valor in variavel:
    if valor.startswith('M'):
        comecaComM = True

if comecaComM:
    print('Existe palavra que começa com M')
else:
    print('Não existe palavra que comece com M')


print()
print()
for valor in variavel:
    print(valor)
    if valor.lower().startswith('m'): #checa se começa com a letra citada
        break
else:
    print('Não começa com m')
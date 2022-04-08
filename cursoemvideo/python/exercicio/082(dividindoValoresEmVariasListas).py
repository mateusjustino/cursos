listaCompleta = list()

while True:
    n = int(input('Digite um valor: '))
    listaCompleta.append(n)

    pergunta = str(input('Adicionar outro valor?[S/N] ')).upper()
    if pergunta == 'N':
        break
print('.' * 50)
print(f'A lista completa é {listaCompleta}')

listaPar = list()
listaImpar = list()
for valor in listaCompleta:
    if valor % 2 == 0:
        listaPar.append(valor)
    else:
        listaImpar.append(valor)

print(f'A lista de pares é {listaPar}')
print(f'A lista de ímpares é {listaImpar}')
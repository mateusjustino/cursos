dados = 'Pedro', 25
print(dados)

pessoas = list()
pessoas.append(dados[:])             #lista dentro de outra lista
print(pessoas)
print(len(pessoas))

pessoas.clear()
pessoas = [['Pedro', 25], ['Maria', 19], ['Joao', 32]]
print(pessoas)
print(len(pessoas))

print(pessoas[0][0])           #seleciona o item 0 e dentro desse item 0 pega o item 0

for p in pessoas:         #aparece todos os itens da lista
    print(p)

for p in pessoas:
    print(p[0])           #aparece só os itens 0 dentro das listas

for p in pessoas:
    print(f'{p[0]} tem {p[1]} anos de idade')           #aparece os itens 0 e 1 dentro das listas

galera = list()
dado = list()
for c in range(0, 3):
    dado.append(str(input('Nome: ')))
    dado.append(int(input('Idade: ')))
    galera.append(dado[:])
    dado.clear()

print(galera)

totalMaior = totalMenor = 0
for p in galera:
    if p[1] >= 21:
        print(f'{p[0]} é maior de idade ')
        totalMaior += 1
    else:
        print(f'{p[0]} é menor de idade')
        totalMenor += 1
print(f'Temos {totalMaior} maiores e {totalMenor} menores de idade')
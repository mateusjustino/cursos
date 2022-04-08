lista = ()
lista1 = list()

tuplas = []
tuplas1 = tuple()

dicionario = {}
dicionario1 = dict()



dados = {'nome': 'Pedro', 'idade': 25}
print(dados['nome'])
print(dados['idade'])
print(f'O {dados["nome"]} tem {dados["idade"]} anos')

dados['nome'] = 'Leandro'        #altera o elemento
print(dados)

dados['sexo'] = 'M'           #adiciona o elemento
print(dados)
del dados['idade']
print(dados)

print()
filme = {'titulo': 'Star Wars',
         'ano': 1977,
         'diretor': 'George Lucas'
        }
print(filme)
print(filme.values())        #mostra os valores dos dados
print(filme.keys())          #mostra o titulo dos dados
print(filme.items())         #mostra o titulo e os valores

print()
for k in filme.keys():
    print(f'As chaves são {k}')

print()
for v in filme.values():
    print(f'Os valores são {v}')

print()
for k, v in filme.items():
    print(f'O {k} é {v}')

print()

print('dicionario dentro de listaaaaaaaa')
brasil = []
estado1 = {'uf': 'Rio de Janeiro', 'sigla': 'RJ'}
estado2 = {'uf': 'São Paulo', 'sigla': 'SP'}
brasil.append(estado1)
brasil.append(estado2)
print(brasil)
print(brasil[0])
print(brasil[0]['uf'])

estado = dict()
pais = list()
for c in range(0, 3):
    estado['uf'] = str(input('Unidade Federativa: '))
    estado['sigla'] = str(input('Sigla: '))
    pais.append(estado.copy())

print()
for e in pais:
    print(f'O estado é {e}')

print()
for e in pais:
    for v in e.values():
        print(f'{v}', end=' ')
    print()
print()
for e in pais:
    for keys, values in e.items():
        print(f'O campo {keys} tem valor {values}')
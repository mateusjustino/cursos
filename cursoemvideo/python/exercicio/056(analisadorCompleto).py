'''
nomeLista = str()
idadeLista = int()
sexoLista = str()

for x in range(1, 3):
    nome = str(input('nome: '))
    #idade = int(input('idade: '))
    #sexo = str(input('sexo (F ou M): '))

    nomeLista = nomeLista + ' ' + nome


print('fim')
print(nomeLista)
print(nomeLista.split())
nomeListaSeparados = nomeLista.split()
verifica = int(1)
print(nomeListaSeparados[verifica])
'''


idadeTotal = int(0)
homemMaisVelho = int(0)
nomeHomemMaisVelho = str('')
mulherMenosDe20 = int(0)

for x in range(1, 5):
    print('---- {}ª Pessoa -----'.format(x))
    nome = str(input('nome: '))
    idade = int(input('idade: '))
    sexo = str(input('sexo (F ou M): '))

    idadeTotal += idade

    if sexo == 'M':
        if idade > homemMaisVelho:
            homemMaisVelho = idade
            nomeHomemMaisVelho = nome

    if sexo == 'F':
        if idade < 20:
            mulherMenosDe20 += 1

print('\n')
print('A média de idade do grupo é {:.2f}'.format(idadeTotal / 4))
print('O nome do homem mais velho é {}'.format(nomeHomemMaisVelho))
print('A quantidade de mulheres menores de 20 anos é {}'.format(mulherMenosDe20))
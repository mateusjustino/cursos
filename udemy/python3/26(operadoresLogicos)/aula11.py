idade = 19

idadeMenor = 20
idadeMaior = 30

if idade >= idadeMenor and idade <= idadeMaior:
    print('Pode pegar emprestimo')
else:
    print('Nao pode pegar')


idade = 50
if idade >= idadeMenor or idade <= idadeMaior:
    print('Pode pegar emprestimo')
else:
    print('Nao pode pegar')


if not 5 > 7:
    print('5 é maior que 7')
else:
    print('5 não é maior que 7')


nome = 'mateus'
if 'eu' in nome:
    print('tem eu')
else:
    print('nao tem eu')


nome = 'asgsgfdhdf'
if 'eu' not in nome:
    print('tem eu')
else:
    print('nao tem eu')
'''
primeiroTermo = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razão: '))

qtdeTermos = 0
count = 1
while count <= 10:
    print(primeiroTermo, end=' > ')
    primeiroTermo += razao
    count += 1
    qtdeTermos += 1
print('Pausa')

pergunta = int(input('\nVocê quer mais quantos termos? '))
while pergunta > 0:
    count = 1
    while count <= pergunta:
        print(primeiroTermo, end=' > ')
        primeiroTermo += razao
        count += 1
        qtdeTermos += 1
    print('Pausa')
    pergunta = int(input('\nVocê quer mais quantos termos? '))
print('\nFim da Progressão usando {} termos'.format(qtdeTermos))
'''
#ou assimmmmmmmmmmm

print('Gerador de PA')
print('-=' * 10)
primeiro = int(input('Primeiro termo: '))
razao = int(input('Razão da PA: '))
termo = primeiro
cont = 1
total = 0
mais = 10

while mais != 0:
    total = total + mais
    while cont <= total:
        print('{} > '.format(termo), end='')
        termo += razao
        cont += 1
    print('Pausa')
    mais = int(input('Quantos termos você quer mostrar mais? '))
print('Progrssão finalizada com {} termos'.format(total))
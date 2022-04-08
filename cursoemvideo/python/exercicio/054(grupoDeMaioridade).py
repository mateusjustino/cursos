from datetime import date
qtdeMenores = int(0)
for x in range (1, 8):
    n = int(input('Digite o ano de nascimento: '))
    idade = date.today().year - n
    if idade <= 18:
        qtdeMenores += 1

if qtdeMenores == 0:
    print('Não há menores de idade.')
if qtdeMenores == 1:
    print('Há 1 menor de idade.')
if qtdeMenores > 1:
    print('Há {} menores de idade.'.format(qtdeMenores))
from datetime import date
atual = date.today().year
nascimento = int(input('Digite o ano de nascimento: '))
idade = atual - nascimento

if idade < 18:
    print('Ainda falta {} anos para voce se alistar'.format(18 - idade))
elif idade == 18:
    print('Você está com 18 anos, está na hora de se alistar')
else:
    print('Já passou {} anos do seu alistamento'.format(idade - 18))

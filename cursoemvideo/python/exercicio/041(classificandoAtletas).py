from datetime import date
nascimento = int(input('Digite o ano de nascimento: '))
idade = date.today().year - nascimento
if idade <= 9:
    categoria = 'mirim'
elif idade <= 14:
    categoria = 'infantil'
elif idade <= 19:
    categoria = 'junior'
elif idade <= 20:
    categoria = 'senior'
else:
    categoria = 'master'
print('A idade é {} anos, portanto acategoria do atleta é {}'.format(idade, categoria))

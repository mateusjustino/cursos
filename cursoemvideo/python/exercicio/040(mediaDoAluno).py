color = {'limpar':'\033[m',
         'vermelho':'\033[31m',
         'amarelo':'\033[33m',
         'verde':'\033[32m'}
n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
media = (n1 + n2) / 2

if media < 5:
    print('{}Reprovado{}, sua média foi {:.1f}'.format(color['vermelho'], color['limpar'], media))
elif media >= 5 and media <= 6.9:
    print('{}Recuperação{}, sua média foi {:.1f}'.format(color['amarelo'], color['limpar'], media))
else:
    print('{}Aprovado{}, sua média foi {:.1f}'.format(color['verde'], color['limpar'], media))
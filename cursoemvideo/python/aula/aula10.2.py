n1 = float(input('Digite a primeira nota: '))
n2 = float(input('Digite a segunda nota: '))
m = (n1 + n2) / 2
print('A sua média foi {:.1f}'.format(m))
if m>=6:
    print('Aprovado')
else:
    print('Reprovado')

#ou assim
print('Aprovado' if m >= 6 else 'Reprovado')

r1 = float(input('Digite a primeira reta: '))
r2 = float(input('Digite a segunda reta: '))
r3 = float(input('Digite a terceira reta: '))
check = ''
if (r1 + r2) > r3:
    check = check + 'a'
if (r1 + r3) > r2:
    check = check + 'b'
if (r2 + r3) > r1:
    check = check + 'c'

if check == 'abc':
    print('É possível formar um triângulo')
else:
    print('Não foi possível formar o triângulo')

print(check)

#ou assim
if r1 < r2 + r3 and r2 < r1 + r3 and r3 < r1 + r2:
    print('É possível formar um triângulo')
else:
    print('Não foi possível formar o triângulo')


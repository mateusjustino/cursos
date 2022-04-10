'''
num = -10

if num < 1:
    raise Exception('Valor não permitido')
'''

num2 = 'Bruno'
if not type(num2) is int:
    raise Exception('Somente números')
else:
    print(num2)

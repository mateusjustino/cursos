'''
while True:
    nome = input('qual seu nome: ')
    print(f'Olá {nome}')


'''
'''
x = 0
while x < 10:
    print(x)
    x = x + 1
print('Acabou')

'''
'''
x = 0
while x < 10:
    if x == 3:
        x = x+1
        print('ta igual a 3')
        continue   # continue serve para recomeçar o while e nao executar o que falta
        #break      # break serve para parar o while

    print(x)
    x = x + 1
print('Acabou')
'''
'''
x = 1 #coluna
y = 1 #linha

while x < 6:

    y = 1
    while y < 6:
        print(f'x = {x} / y = {y}')
        y += 1
        
    x += 1
'''
while True:
    print()
    num1 = int(input('Digite um número: '))
    num2 = int(input('Digite outro número: '))
    operador = input('Digite um operador: ')
    print()
    if operador == '+':
        print(f'{num1} + {num2} = {num1 + num2}')
    elif operador == '-':
        print(f'{num1} - {num2} = {num1 - num2}')
    elif operador == '*':
        print(f'{num1} * {num2} = {num1 * num2}')
    elif operador == '/':
        print(f'{num1} / {num2} = {num1 / num2}')
    print()




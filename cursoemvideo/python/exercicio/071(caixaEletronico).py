print('= ' * 20)
print('{:^40}'.format('Banco'))
print('= ' * 20)

valor = int(input('Quanto você deseja sacar? R$ '))

qtde50cedulas = valor // 50
if qtde50cedulas > 0:
    print(f'\nTotal de {qtde50cedulas} cédulas de R$50')

restante50cedulas = valor % 50
qtde20cedulas = restante50cedulas // 20
if qtde20cedulas > 0:
    print(f'Total de {qtde20cedulas} cédulas de R$20')

restante20cedulas = restante50cedulas % 20
qtde10cedulas = restante20cedulas // 10
if qtde10cedulas > 0:
    print(f'Total de {qtde10cedulas} cédulas de R$10')

restante10cedulas = restante20cedulas % 10
qtde1cedulas = restante10cedulas // 1
if qtde1cedulas > 0:
    print(f'Total de {qtde1cedulas} cédulas de R$1')

print('= ' * 20)
print('Volte sempre!')

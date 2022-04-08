salario = float(input('Digite o salário do funcionário: R$ '))
if salario > 1250:
    salarioAumento = (salario / 100) * 110
    print('O novo salário terá aumento de 10%, totalizando R${:.2f}'.format(salarioAumento))
else:
    salarioAumento = (salario / 100) * 115
    print('O novo salário terá aumento de 15%, totalizando R${:.2f}'.format(salarioAumento))

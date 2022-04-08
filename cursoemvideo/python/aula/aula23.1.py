try:
    a = int(input('Numerador: '))
    b = int(input('Denominador: '))
    c = a / b
except Exception as erro:
    print(f'Problema encontrado foi: {erro}')
else:
    print(f'O resultado é {c:.2f}')
finally:
    print('Volte sempre!')
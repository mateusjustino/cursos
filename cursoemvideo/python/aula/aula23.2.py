try:
    a = int(input('Numerador: '))
    b = int(input('Denominador: '))
    c = a / b
except (ValueError, TypeError):
    print(f'Tivemos um problema com os tipos de dados que você digitou')
except ZeroDivisionError:
    print(f'Não é possível dividir um número por zero')
except KeyboardInterrupt:
    print(f'O usuário preferiu não informar os dados')
except Exception as erro:
    print(f'O erro encontrado foi {erro}')
else:
    print(f'O resultado é {c:.2f}')
finally:
    print('Volte sempre!')
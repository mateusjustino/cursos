def aumento(valor, percentual):
    return valor + (valor * (percentual / 100))


print(f'O aumento dará {aumento(50, 10)}')
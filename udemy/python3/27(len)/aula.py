usuario = input('Digite seu usario: ')
qtdeCaracteres = len(usuario)

print(f'Usuário é {usuario}, possui {qtdeCaracteres} caracteres e o tipo é {type(usuario)}')


print(len(usuario))  # jeito tradicional de fazer
print(usuario.__len__()) # aqui usando o metodo len, tanto em cima quanto em baixo são iguais
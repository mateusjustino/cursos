lista = 'Lápis', 1.75, 'Borracha', 2.00, 'Caderno', 15.90, 'Estojo', 25.00, \
        'Transferidor', 4.20, 'Compasso', 9.99, 'Mochila', 120.32,\
        'Canetas', 22.30, 'Livro', 34.90

print('-' * 40)
print('Listagem de Preços'.center(40, ' '))
print('-' * 40)
count = 0
for item in lista:
    count += 1
    if count == 1:
        print(f'{item}'.ljust(30, '.'), end='')
    if count == 2:
        print(f'R$ {item:6.2f}')
        count = 0

print(f'{"ou assimmmmmmmm":^40}')
for pos in range(0, len(lista)):
    if pos % 2 == 0:
        print(f'{lista[pos]:.<30}', end='')
    else:
        print(f'R${lista[pos]:>7.2f}')

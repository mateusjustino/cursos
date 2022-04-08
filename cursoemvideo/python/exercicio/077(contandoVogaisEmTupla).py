lista = 'aprender', 'programar', 'linguagem', 'python', 'curso', 'gratis'

for item in lista:
    count = 0
    vogais = ''
    while count < len(item):
        letra = item[count]

        if letra == 'a' or letra == 'e' or letra == 'i' or letra == 'o' or letra == 'u':
            vogais += '{} '.format(letra)
        count += 1
    print(f'Na palavra {item.upper()} temos as vogais: {vogais}')

print('\nou assimmmmmmmm\n')

for p in lista:
    print(f'\nNa palavra {p.upper()} temos ', end='')
    for letra in p:
        if letra.lower() in 'aeiou':
            print(letra, end=' ')

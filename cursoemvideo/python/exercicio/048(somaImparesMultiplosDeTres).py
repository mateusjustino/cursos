s = int(0)
for c in range(3, 500, 3):
    dividir = c % 2
    if dividir != 0:
        s += c
        print(c)
print('A soma entre todos os impares e multiplos de 3 entre 1 a 500 é igual a {}'.format(s))
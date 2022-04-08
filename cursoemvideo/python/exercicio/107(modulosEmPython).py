from ex107.moeda import metade, dobro, aumentar, diminuir

p = float(input('Digite o preço: R$ '))
print(f'A metade de {p:.2f} é {metade(p):.2f}')
print(f'O dobro de {p:.2f} é {dobro(p):.2f}')
print(f'Aumentando 10%, temos {aumentar(p, 10):.2f}')
print(f'Reduzindo 13%, temos {diminuir(p, 13):.2f}')
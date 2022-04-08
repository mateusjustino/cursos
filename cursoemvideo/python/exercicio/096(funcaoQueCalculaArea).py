def area(largura, comprimento):

    areaResultado = largura * comprimento
    print(f'A área de um terreno de {largura:.2f}m x {comprimento:.2f}m é de {areaResultado:.2f}m²')


print('=' * 30)
print('Área do terreno'.center(30))
print('=' * 30)

largura = float(input('Largura (m): '))
comprimento = float(input('Comprimento (m): '))
area(largura, comprimento)

print('=' * 30)

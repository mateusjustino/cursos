class carro:
    velMax = 0
    ligado = False
    cor = ''


c1 = carro()
c2 = carro()
c3 = carro()

c1.velMax = 200
c1.cor = 'Preto'
c1.ligado = False

print(f'Velocidade maxima: {c1.velMax}')
print(f'Cor: {c1.cor}')
estado = 'Sim' if c1.ligado else 'Não'
print(f'Ligado: {estado}')

distancia = int(input('Qual a distância da viagem? '))
if distancia <= 200:
    preco = distancia * 0.5
    print('Cada kilometro custara R$0,50, totalizando R${:.2f}'.format(preco))
else:
    preco = distancia * 0.45
    print('Cada kilometro custara R$0,45, totalizando R${:.2f}'.format(preco))

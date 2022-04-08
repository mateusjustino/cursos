vel = int(input('Digite a velocidade do carro: '))
if vel > 80:
    print('Velocidade acima do limite de 80km/h!')
    kmAcima = vel - 80
    multa = 7 * kmAcima
    print('Você estava a {}Km/h, pagará R${:.2f} de multa'.format(vel, multa))
else:
    print('Velocidade dentro do limite')
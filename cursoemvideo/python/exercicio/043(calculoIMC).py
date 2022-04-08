peso = float(input('Digite seu peso: '))
altura = float(input('Digite sua altura: '))

imc = peso / (altura ** 2)
status = ''
if imc < 15.5:
    status = 'Abaixo do Peso'
elif imc < 25:
    status = 'Peso ideal'
elif imc < 30:
    status = 'Sobrepeso'
elif imc < 40:
    status = 'Obesidade'
else:
    status = 'Obesidade Mórbida'
print('Seu IMC é {:.2f} e seu status é: {}'.format(imc, status))
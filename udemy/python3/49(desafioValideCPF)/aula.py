cpfTeste = '168.995.350-09'
cpfTesteSemPonto = ''
guarda9numeros = ''

somaCpf = 0
cpf9digit = 0
countTo2 = 10
for l in cpfTeste: #loop para todos os caracter do cpf
    if l.isnumeric(): #checo se o caracter atual é um numero
        cpfTesteSemPonto += l
        l = int(l)
        cpf9digit += 1 #vou somando até pegar os 9 primeiros digitos do cpf
        if cpf9digit <= 9: #checo se ainda esta até 9 digitos
            somaCpf += l * countTo2 #aqui faço a conta do atual digito vezes o multiplicador correspondete, que começa de 10 até 2
            countTo2 -= 1
            guarda9numeros += str(l)
print(f'Deu isso aqui a soma digito 1: {somaCpf}')

digito1 = 11 - (somaCpf % 11)
print(f'Calculo do digito 1: {digito1}')
if digito1 > 9:
    digito1 = 0

print(f'Valor final digito 1: {digito1}')


# parte do digito 2 agora
print('--------digito 2---------------')
countTo2 = 11
cpf9digit = 0
somaCpf = 0

for l in cpfTeste:
    if l.isnumeric():
        l = int(l)
        cpf9digit += 1
        if cpf9digit <= 10:   
            somaCpf += l * countTo2
            countTo2 -= 1

print(f'Deu isso aqui a soma digito 2: {somaCpf}')
digito2 = 11 - (somaCpf % 11)
print(f'Calculo do digito 2: {digito2}')
if digito2 > 9:
    digito2 = 0

print(f'Valor final digito 1: {digito2}')

print('--------conferindo cpf---------------')
cpfGerado = str(guarda9numeros) + str(digito1) + str(digito2)

if cpfTesteSemPonto == cpfGerado:
    print('Válido!')
else:
    print('Inválido!')




s = ''
while s != 'M' and s != 'F':
    s = str(input('Digite seu sexo(F/M): ')).upper()
    if s != 'M' and s != 'F':
        print('Resposta incorreta!')
print('fim')

print('ou assimmmmmmmm')
sexo = str(input('Informe seu sexo: [M/F]')).strip().upper()[0]
while sexo not in 'MmFf':
    sexo = str(input('Dados inválidos, por favor, informe seu sexo: ')).strip().upper()[0]
print('Sexo {} registrado com sucesso'.format(sexo))
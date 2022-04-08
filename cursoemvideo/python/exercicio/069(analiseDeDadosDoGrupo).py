print('=' * 40)
print('     Cadastre uma pessoa')
print('=' * 40)

pessoaMais18 = homensCadastrados = mulheresMenosDe20 = 0

while True:
    idade = int(input('Idade: '))
    sexo = str(input('Sexo: [M/F] ')).upper()
    while sexo not in 'MF':
        sexo = str(input('Sexo: [M/F] ')).upper()

    if idade > 18:
        pessoaMais18 += 1
    if sexo == 'M':
        homensCadastrados += 1
    if sexo == 'F' and idade < 20:
        mulheresMenosDe20 += 1


    print('=' * 40)
    pergunta = str(input('Deseja continuar? [S/N] ')).upper()
    while pergunta not in 'SN':
        pergunta = str(input('Deseja continuar? [S/N] ')).upper()

    if pergunta == 'N':
        break
    print('=' * 40)
print('=' * 40)
print(f'''Dados...
Total de pessoas com mais de 18 anos: {pessoaMais18}
Homens cadastrados: {homensCadastrados}
Mulheres com menos de 20 anos: {mulheresMenosDe20}''')

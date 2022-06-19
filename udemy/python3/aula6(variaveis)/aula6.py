nome = 'Luiz'
print('Nome:', nome, type(nome))

idade = 32
print('Idade:',idade, type(idade))

altura = 1.80
print('Altura:',altura, type(altura))

maior18 = idade > 18
print('Maior de 18 anos:',maior18, type(maior18))

peso = 80
print(f'{nome} tem {idade} anos e seu IMC é : {(peso*2) / altura}')
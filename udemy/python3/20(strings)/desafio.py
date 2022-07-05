nome = 'Mateus'
idade = 26
altura = 1.70
peso = 65.5
anoAtual = 2022
nascimento = anoAtual - idade
imc = peso / (altura ** 2)

print(f'{nome} tem {idade} anos, {altura} de altura e pesa {peso}kg.')
print(f'O IMC de {nome} é {imc:.2f}.')
print(f'{nome} nasceu em {nascimento}')


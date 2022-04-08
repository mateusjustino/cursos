from datetime import datetime
dados = dict()
dados['Nome'] = input('Nome: ')
nascimento = int(input('Ano de nascimeneto: '))
dados['Idade'] = datetime.today().year - nascimento
dados['CTPS'] = int(input('CTPS: '))
if dados['CTPS'] > 0:
    dados['Ano de Contatação'] = int(input('Ano de contatação: '))
    dados['Salário'] = float(input('Salário: '))
    dados['Aposentadoria'] = (dados['Ano de Contatação'] + 35) - nascimento
print('-' * 30)
for k, v in dados.items():
    print(f'{k} tem o valor {v}')
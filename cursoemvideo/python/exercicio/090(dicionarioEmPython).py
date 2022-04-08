aluno = dict()

aluno['Nome'] = str(input('Nome: '))
aluno['Média'] = float(input('Média: '))
if aluno['Média'] >= 7:
    aluno['Situacão'] = 'Aprovado'
elif 5<= aluno['Média'] <7:
    aluno['Situacão'] = 'Recuperação'
else:
    aluno['Situacão'] = 'Reprovado'
print('-'*30)

for k, v in aluno.items():
    print(f'{k} é igual a {v}')

print('-'*30)

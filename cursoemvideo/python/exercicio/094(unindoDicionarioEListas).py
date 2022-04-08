dados = dict()
listaPessoas = list()
somaIdade = 0
while True:
    dados['nome'] = str(input('Nome: '))
    dados['sexo'] = str(input('Sexo: ')).upper()
    dados['idade'] = int(input('Idade: '))
    somaIdade += dados['idade']
    listaPessoas.append(dados.copy())
    pergunta = str(input('Deseja cadastrar mais? [S/N] '))
    if pergunta in 'Nn':
        break
print(':-:' * 15)

print(f' - O grupo tem {len(listaPessoas)} pessoas')
print(f' - A média de idade é de {somaIdade / len(listaPessoas):.2f} anos')
print(f' - As mulheres cadastras foram: ', end='')
for x in range(0, len(listaPessoas)):
    if listaPessoas[x]['sexo'] in 'Ff':
        print(listaPessoas[x]['nome'], end='...')
print()
print(f' - Lista das pessoas com idade acima da média: ')
for x in range(0, len(listaPessoas)):
    if listaPessoas[x]['idade'] >= somaIdade / len(listaPessoas):
        print(f'Nome = {listaPessoas[x]["nome"]}; Sexo = {listaPessoas[x]["sexo"]}; Idade = {listaPessoas[x]["idade"]}')
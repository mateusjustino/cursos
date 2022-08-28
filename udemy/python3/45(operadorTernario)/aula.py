loggedUser = False
msg = 'Usuario logado' if loggedUser == True else 'Usuario precisa logar' #isto é operação ternaria

print(msg)


idade = 18
deMaior = (idade >= 18)
msg = 'Pode acessar' if deMaior else 'Nao pode acessar'
print(msg)

idade = input('Qual a sua idade? ')
if not idade.isnumeric():
    print('Voce precisa digitar apenas numeros')
else:
    idade = int(idade)
    deMaior = (idade >= 18)
    msg = 'Pode acessar' if deMaior else 'Nao pode acessar'
    print(msg)
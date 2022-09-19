def mestre(funcao, *args, **kwargs):
    return funcao(*args, **kwargs)

def falaOi(nome):
    return f'Oi {nome}'

def saudacao(nome, saudacao):
    return f'{saudacao} {nome}'

var = mestre(falaOi, 'Mateus')
var2 = mestre(saudacao, 'Mateus', saudacao='Bom dia!')

print(var)
print(var2)


def voto(ano=0):
    from datetime import datetime
    idade = datetime.today().year - ano
    if idade < 16:
        return f'Com {idade} anos, o voto é negado'
    elif idade == 16 or idade == 17 or idade > 65:
        return f'Com {idade} anos, o voto é opcional'
    else:
        return f'Com {idade} anos, o voto é obrigatório'


print('=' * 30)
nascimento = int(input('Digite o ano de nascimento: '))
print(voto(nascimento))

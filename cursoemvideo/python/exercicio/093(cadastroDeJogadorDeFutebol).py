
dados = dict()
gols = 0
golsLista = list()
dados['nome'] = str(input('Nome do jogador: '))
qtdePartidas = int(input(f'Quantas partidas {dados["nome"]} jogou? '))
for x in range(1, qtdePartidas +1):
    n = (int(input(f'Quantos gols na partida {x}? ')))
    gols += n
    golsLista.append(n)

dados['gols'] = golsLista
dados['total'] = gols
print('_' * 50)
print(dados)
print('_' * 50)
for k, v in dados.items():
    print(f'O campo {k} tem o valor {v}')
print('_' * 50)
print(f'O jogador {dados["nome"]} jogou {qtdePartidas} partidas')
for x in range(0, qtdePartidas):
    print(f'    => Na partida {x+ 1}, fez {dados["gols"][x]} gols')
print(f'Foi um total de {dados["total"]}')

dados = dict()
listaJogadores = list()

while True:
    listaGols = list()
    totalGols = 0
    dados['nome'] = str(input('Nome do jogador: '))
    qtdePartidas = int(input(f'Quantas partidas {dados["nome"]} jogou? '))
    for x in range(1, qtdePartidas +1):
        n = int(input(f'Quantos gols na partida {x}? '))
        totalGols += n
        listaGols.append(n)
    dados['gols'] = listaGols
    dados['total'] = totalGols
    listaJogadores.append(dados.copy())
    pergunta = str(input(f'\nQuer continuar? [S/N] '))
    print('=-=' * 15)
    if pergunta in 'Nn':
        break

print('-=-' * 15)
print('cod'.ljust(5), end='')
print('nome'.ljust(20), end='')
print('gols'.ljust(15), end='')
print('total')
print('-' * 50)
for x in range(0, len(listaJogadores)):
    print(f'{x:<5}{listaJogadores[x]["nome"]:<20}{listaJogadores[x]["gols"]}{listaJogadores[x]["total"]:15}')
print('-' * 50)
while True:
    pergunta = int(input('Mostrar dados de qual jogador? '))
    while True:
        if pergunta >= 0 and pergunta <= len(listaJogadores):
            print(f'----Levantamento do jogador {listaJogadores[pergunta]["nome"]}:')
            for x in range(0, len(listaJogadores[pergunta]["gols"])):
                print(f'    No jogo {x+1} fez {listaJogadores[pergunta]["gols"][x]} gols')
            break

        else:
            print('Número de jogador inválido')
            break
    if pergunta == 999:
        break
print('Finalizado!')


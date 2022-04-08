from random import randint
from time import sleep
from operator import itemgetter
jogo = {'jogador1': randint(1, 6),
        'jogador2': randint(1, 6),
        'jogador3': randint(1, 6),
        'jogador4': randint(1, 6)}
print('Valores sorteados:')
for k, v in jogo.items():
    print(f'{k} tirou {v} no dado.')
    sleep(0.5)
ranking = list()
ranking = sorted(jogo.items(), key=itemgetter(1), reverse=True)
print('-' * 30)
print(f'- Ranking dos jogadores -'.center(30))
for x in range(0, len(ranking)):
    print(f'{x + 1}º lugar: {ranking[x][0]} com {ranking[x][1]}'.center(30))
    sleep(0.5)
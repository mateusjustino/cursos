times = 'Atletico-MG', 'Palmeiras', 'Flamengo', 'Fortaleza', 'Bragantino',\
        'Corinthians', 'Internacional', 'Fluminense', 'Athletico-PR', 'América-MG',\
        'Cuiabá', 'Ceará', 'Santos', 'São Paulo', 'Atlético-GO', 'Bahia',\
        'Juventude', 'Sport', 'Grêmio', 'Chapecoense'

print('--' * 30)
print(f'A classificação atual é: {times}')
print('--' * 30)
print(f'Os 5 primeiros são {times[0:5]}')
print('--' * 30)
print(f'Os 4 últimos são: {times[-4:]}')
print('--' * 30)
print(f'Em ordem alfabética: {sorted(times)}')
print('--' * 30)
print(f'A Chapecoense está na {times.index("Chapecoense") + 1}ª posição')
print('--' * 30)
def titulo(msg):
    print('-' * 40)
    print(f'{msg}'.center(50))
    print('-' * 40)

def cores(escolha=0):
    colors = ('\033[m',         # 0 sem cores
              '\033[0;31m',     # 1 vermelho
              '\033[0;32m',     # 2 verde
              '\033[0;33m',     # 3 amarelo
              '\033[0;34m',     # 4 azul
              '\033[0;35m',     # 5 roxo
              '\033[0;36m',     # 6 ciano
              '\033[0;37m'      # 7 cinza
              )
    return colors[escolha]


def leiaInt(msg):
    while True:
        n = str(input(msg))
        if n.isnumeric():
            break
        else:
            print(f'{cores(1)}Digite uma idade correta{cores(0)}')
    return n
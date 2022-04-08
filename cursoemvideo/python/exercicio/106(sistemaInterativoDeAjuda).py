from time import sleep
c = ('\033[m',             #0 sem cores
     '\033[0;30;41m',      #1 vermelho
     '\033[0;30;42m',      #2 verde
     '\033[0;30;43m',      #3 amarelo
     '\033[0;30;44m',      #4 azul
     '\033[0;30;45m',      #5 roxo
     '\033[7;40m,'         #6 branco
     )


def ajuda(com):
    sleep(0.5)
    titulo(f'Acessando o comando {com}', 4)
    sleep(0.5)
    print(c[6], end='')
    help(com)
    print(c[0], end='')

def titulo(msg, cor=0):
    sleep(0.5)
    tamanho = len(msg) + 4
    print(c[cor], end='')
    print('~' * tamanho)
    print(f'  {msg}  ')
    print('~' * tamanho)
    print(c[0], end='')


comando = ''
while True:
    sleep(0.5)
    titulo('Sistema de Ajuda Pyhelp', 2)
    print(c[3], end='')
    sleep(0.5)
    comando = str(input('Função ou Biblioteca > '))
    print(c[0], end='')
    if comando.upper() == 'FIM':
        break
    else:
        ajuda(comando)
sleep(0.5)
titulo('Até logo!', 1)

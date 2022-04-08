from time import sleep


def linha():
    print('=-=' * 15)


def contador(inicio, fim, passo):
    linha()

    if inicio < fim:
        if passo == 0:
            passo = 1
        print(f'Contagem de {inicio} até {fim} de {passo} em {passo}')
        if passo < 0:
            passo *= -1
        for x in range(inicio, fim + 1, passo):
            print(x, end='... ', flush=True)
            sleep(0.1)
    if inicio > fim:
        if passo == 0:
            passo = -1
        if passo < 0:
            passo *= -1
        print(f'Contagem de {inicio} até {fim} de {passo} em {passo}')
        if passo > 0:
            passo *= -1

        for x in range(inicio, fim - 1, passo):
            print(x, end='... ', flush=True)
            sleep(0.1)
    print('Fim')
    linha()
    print()


contador(1, 10, 1)
contador(10, 0, 2)

print('Agora é sua vez de personalizar a contagem')
x = int(input('Inicio: '))
y = int(input('Fim:    '))
z = int(input('Passo:  '))
contador(x, y, z)

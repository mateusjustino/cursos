from time import sleep


def maior(*numeros):
    sleep(0.5)
    print('=' * 30)
    print('Analisando os valores passados')
    numeroMaior = 0
    for valor in numeros:
        print(valor, end=', ', flush=True)
        sleep(0.5)
        if numeroMaior == 0:
            numeroMaior = valor
        if valor > numeroMaior:
            numeroMaior = valor
    print(f'Foram informados {len(numeros)} valores ao todo')
    print(f'O numero maior é {numeroMaior}')
    print()

maior(2, 9, 4, 5, 7 , 1)
maior(4, 7, 0)
maior(1, 2)
maior(6)
maior()

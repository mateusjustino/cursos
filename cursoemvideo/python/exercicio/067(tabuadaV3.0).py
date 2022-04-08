


while True:
    print('=' *30)
    n = int(input('Qual tabuada deseja ver (valor negativo para parar): '))
    if n < 0:
        break
    print(f'\n----- Tabuada do {n} -----')
    count = 1
    while count <= 10:
        print(f'      {n} * {count:2} = {n * count}    ')
        count += 1
    print('=' * 30)
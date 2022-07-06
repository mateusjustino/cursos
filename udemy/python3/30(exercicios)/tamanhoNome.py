while True:
    nome = input('Digite seu nome: ')

    if not nome.isnumeric():
        if len(nome) <= 4:
            print(f'Seu nome é {nome}, ele é curto')
        elif len(nome) <= 6:
            print(f'Seu nome é {nome}, ele é normal')
        else:
            print(f'Seu nome é {nome}, ele é grande')
    else:
        print('nome invalido')
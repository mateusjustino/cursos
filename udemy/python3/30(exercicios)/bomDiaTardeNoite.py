while True:


    hora = input('Que horas são? ')

    if hora.isnumeric():
        hora = int(hora)
        if hora < 11:
            print(f'Bom dia, são {hora} horas')
        elif hora < 17:
            print(f'Boa tarde, são {hora} horas')
        elif hora < 24:
            print(f'Boa noite, são {hora} horas')
        else:
            print('Hora invalida')
    else:
        print('Insira uma hora válida')
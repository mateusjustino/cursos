
def leiaDinheiro(msg):
    while True:
        teste = str(input(msg)).strip()
        if teste.isnumeric():
            nFloat = float(teste)
            break
        elif teste.replace('.', '').isnumeric():
            nFloat = float(teste)
            break
        elif (teste.replace(',', '.')).replace('.', '').isnumeric():
            variavel = teste.replace(',', '.')
            nFloat = float(variavel)
            break
        else:
            print(f'Erro: "{teste}" é um preço inválido')
            #teste = str(input(msg))
    return nFloat

#ou assimmmmmmmmmmmm
'''
def leiaDinheiro(msg):
    valido = False
    while not valido:
        entrada = str(input(msg)).replace(',', '.').strip()
        if entrada.isalpha() or entrada == '':
            print(f'Erro: {entrada} é um preço inválido')
        else:
            valido = True
            return float(entrada)
'''
def separa():
    print('-------------------------------------')


def func(a1, a2, a3, a4, a5, nome=None, a6=None):
    print(a1, a2, a3, a4, a5, nome, a6)
    return nome, a6

var = func(1, 2, 3, 4, 5, nome='Mateus', a6=5)
print(var[0], var[1])

separa()

def func(*args): #args é um nome padrao para argumentos quando precisam ser usados
    print(args) # aqui printa todos os argumentos enviados
    print(args[0]) # aqui printa o argumento 0 enviado
    print(args[-1]) # aqui printa o ultimo argumento enviado
    print(len(args)) # aqui printa a quantidade de argumento enviado

func(1, 2, 3, 4, 5)

separa()

def func(*args): # os argumentos sempre vem como tuplas
    args = list(args) # aqui transforma a tupla em list para poder modificala
    args[0] = 20
    print(args)    

func(1, 2, 3, 4, 5)

separa()

def func(*args):    
    print(args)    

lista = [1, 2, 3, 4, 5]
func(*lista, 6) #o "*" é para desempacotar uma lista

separa()

def func(*args, **kwargs):    #kwargs é abreviação de Key words Args
    print(args)
    print(kwargs['nome'], kwargs['sobrenome']) #kwargs para exibir a mensagem caso alguem tenha mandado um item declado como 'nome'

lista = [1, 2, 3, 4, 5]
lista2 = [10, 20, 30, 40, 50]
func(*lista, *lista2, nome='Mateus', sobrenome='Justino')

separa()

def func(*args, **kwargs):    
    print(args)
    
    idade = kwargs.get('idade') # melhor usar .get quando nao tenho certeza se existe
    if idade is not None:
        print(idade)
    else:
        print('Idade não enviada')

lista = [1, 2, 3, 4, 5]
lista2 = [10, 20, 30, 40, 50]
func(*lista, *lista2, nome='Mateus', sobrenome='Justino')


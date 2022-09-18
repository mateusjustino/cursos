def func1(func2):
    saudacao('Olá')
    nome('Mateus!')
    return func2

def func2():
    print(f'Função 22222') 

def saudacao(saudacao):
    print(saudacao)

def nome(nome):
    print(nome)

func1(func2())
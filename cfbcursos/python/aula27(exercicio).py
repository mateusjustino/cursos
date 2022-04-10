import os
from time import sleep
carros = []

def linha():
    print('=' * 50)


class carro:
    nome = ''
    pot = 0
    velMax = 0
    ligado = False

    def __init__(self, nome, pot):              # a classe é carro e o construtor é esse que recebe 2 valores
        self.nome = nome
        self.pot = pot
        self.velMax = int(pot) * 2
        self.ligado = False

    def ligar(self):
        self.ligado = True

    def desligar(self):
        self.ligado = False

    def info(self):
        print(f'Nome................: {self.nome}')
        print(f'Potencia............: {self.pot}')
        print(f'Velocidade Máxima...: {self.velMax}')
        print(f'Ligado..............: {"Sim" if self.ligado == True else "Não"}')


def menu():
    linha()
    print('[ 1 ] - Novo Carro')
    print('[ 2 ] - Informações do Carro')
    print('[ 3 ] - Escluir Carro')
    print('[ 4 ] - Ligar Carro')
    print('[ 5 ] - Desligar Carro')
    print('[ 6 ] - Lista Carro')
    print('[ 7 ] - Sair')
    print(f'Quantidade de Carros: {len(carros)}')
    linha()
    opc = input('Digite uma opção: ')
    return opc
    sleep(0.5)

def novoCarro():
    linha()
    n = input('Nome do Carro: ')
    p = input('Potência do Carro: ')
    car = carro(n, p)
    carros.append(car)
    print(f'O carro {n} foi criado')
    sleep(0.5)

def informacoes():
    linha()
    n = input('Informe o número do carro que deseja ver: ')
    try:
        carros[int(n)].info()
    except:
        print('Carro não existe')
    sleep(0.5)

def excluirCarro():
    linha()
    n = input('Informe o número do carro que deseja excluir: ')
    try:
        del carros[int(n)]
    except:
        print('Carro não existe')
    sleep(0.5)

def ligarCarro():
    linha()
    n = input('Informe o número do carro que deseja ligar: ')
    try:
        carros[int(n)].ligar
        print(f'Carro {n} ligado')
    except:
        print('Carro não existe')
    sleep(0.5)

def desligarCarro():
    linha()
    n = input('Informe o número do carro que deseja desligar: ')
    try:
        carros[int(n)].desligar
        print(f'Carro {n} desligado')
    except:
        print('Carro não existe')
    sleep(0.5)

def listarCarro():
    linha()
    p = 0
    for c in carros:
        print(f'{p} - {c.nome}')
        p += 1
    sleep(0.5)

ret = menu()
while ret < '7':
    if ret == '1':
        novoCarro()
    elif ret == '2':
        informacoes()
    elif ret == '3':
        excluirCarro()
    elif ret == '4':
        ligarCarro()
    elif ret == '5':
        desligarCarro()
    elif ret == '6':
        listarCarro()
    ret = menu()

print('Programa finalizado')

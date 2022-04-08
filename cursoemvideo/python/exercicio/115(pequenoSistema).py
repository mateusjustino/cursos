from ex115.funcoes import titulo, cores, leiaInt
from time import sleep
from os import mkdir, path

if not path.isdir('ex115/teste'):
    mkdir('ex115/teste')
    arquivo = open('ex115/teste/texto.txt', 'a')

while True:
    sleep(0.5)
    titulo(f'{cores(5)}Menu Principal{cores(0)}')
    sleep(0.5)

    print(f'{cores(2)}1{cores(0)} - {cores(6)}Ver pessoas cadastradas{cores(0)}')
    print(f'{cores(2)}2{cores(0)} - {cores(6)}Cadastrar nova pessoa{cores(0)}')
    print(f'{cores(2)}3{cores(0)} - {cores(6)}Sair do sistema{cores(0)}')
    print('-' * 40)
    sleep(0.5)

    while True:
        valor = 0
        opcao = str(input(f'{cores(3)}Sua opção: {cores(0)}'))
        if opcao.isnumeric():
            valor = int(opcao)
            if valor > 3:
                print(f'{cores(1)}Opção inválida, tente 1, 2 ou 3')
            else:
                valor = int(opcao)
                break
        else:
            print(f'{cores(1)}Oopção inválida, tente 1, 2 ou 3{cores(0)}')
    if valor == 1:
        sleep(0.5)
        titulo(f'{cores(5)}Pessoas Cadastradas{cores(0)}')
        print(f'{cores(4)}', end='')
        arquivo = open('ex115/teste/texto.txt', 'r')
        for linha in arquivo:
            linha = linha.replace('\n', '')
            print(linha)
        print(f'{cores(0)}', end='')

    if valor == 2:
        sleep(0.5)
        titulo(f'{cores(5)}Cadastrar Pessoa{cores(0)}')

        nome = str(input('Nome: '))
        idade = leiaInt('Idade: ')

        arquivo = open("ex115/teste/texto.txt", "a")
        variavel = f'{(nome):<30} {idade} anos \n'
        arquivo.write(variavel)


    if valor == 3:
        sleep(0.5)
        titulo(f'{cores(1)}Programa finalizado{cores(0)}')
        break




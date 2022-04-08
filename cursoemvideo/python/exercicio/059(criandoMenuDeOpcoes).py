n1 = int(input('Digite o primeiro valor: '))
n2 = int(input('Digite o segundo valor: '))



opcao = 0
while opcao != 5:
    print('=' * 40)
    print('[ 1 ] Somar')
    print('[ 2 ] Multiplicar')
    print('[ 3 ] Maior')
    print('[ 4 ] Novos valores')
    print('[ 5 ] Sair do programa')
    print('=' * 40)
    opcao = int(input('Digite uma opção: '))

    if opcao == 1:
        print('A soma de {} + {} é igual a {}'.format(n1, n2, n1 + n2))

    if opcao == 2:
        print('A multiplicação de {} * {} é igual a {}'.format(n1, n2, n1 * n2))

    if opcao == 3:
        if n1 > n2:
            print('Entre {} e {} o maior é {}'.format(n1, n2, n1))
        else:
            print('Entre {} e {} o maior é {}'.format(n1, n2, n2))

    if opcao == 4:
        n1 = int(input('Digite o primeiro valor: '))
        n2 = int(input('Digite o segundo valor: '))

    if opcao > 5:
        print('Opção inválida, tente novamente')
print('\nFim')
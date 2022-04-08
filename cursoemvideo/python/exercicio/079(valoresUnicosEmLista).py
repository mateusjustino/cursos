lista = list()
while True:
    n = int(input('Digite um valor: '))


    if n not in lista:
        lista.append(n)
        print('Valor adicionado com sucesso')
    else:
        print('Valor já existente na lista')

    pergunta = str(input('Deseja continuar? [S/N] ')).upper()
    if pergunta == 'N':
        break

lista.sort()
print('¬' * 30)
print('Você digitou os valores ', lista)
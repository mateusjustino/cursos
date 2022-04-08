lista = list()
while True:
    n = int(input('Digite um valor: '))
    lista.append(n)


    pergunta = str(input('Deseja inserir mais um número? [S/N] ')).upper()
    if pergunta == 'N':
        break

print('^' * 30)


print(f'Foram digitados {len(lista)} números')
lista.sort(reverse=True)
print(f'A lista de ordenada de forma decrescente é {lista}')
if 5 in lista:
    print(f'O número 5 foi digitado')
else:
    print(f'O número 5 não esta na lista')
print('v' * 30)
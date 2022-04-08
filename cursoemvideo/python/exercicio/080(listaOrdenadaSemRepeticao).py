
lista = list()

n1 = int(input('Digite um número: '))
lista.append(n1)
print(f'Adicionado na lista')

for x in range(1, 5):
    n = int(input('Digite um número: '))


    ultimaPosicao = int()
    for posicao, valor in enumerate(lista):
        if n >= valor:
            ultimaPosicao = posicao +1


    lista.insert(ultimaPosicao, n)
    print(f'Adionado na posição {ultimaPosicao} da lista')

print(f'Os valores digitados na ordem são: {lista}')

print('ou assimmmmmmmmmmmmmmmmmmmm')

lista.clear()
for c in range(0, 5):
    n = int(input('Digite um valor: '))
    if c == 0 or n > lista[-1]:
        lista.append(n)
        print('Adicionado no final da lista')
    else:
        posicao = 0
        while posicao < len(lista):
            if n <= lista[posicao]:
                lista.insert(posicao, n)
                print(f'Adicionado na posição {posicao} da lista')
                break
            posicao += 1
print('=-=' * 20)
print(f'Os valores digitados em ordem foram {lista}')
print('Gerador de PA')
primeiroTermo = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razão: '))

count = 1
while count <= 10:
    print(primeiroTermo, end=' > ')
    primeiroTermo += razao
    count += 1
print('fim')
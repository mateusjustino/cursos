primeiroTermo = int(input('Digite o primeiro termo: '))
razao = int(input('Digite a razão: '))
decimo = (primeiroTermo + (10 - 1) * razao) + razao
for x in range(primeiroTermo, decimo, razao):
    print(x, end=' > ')
print('Fim')
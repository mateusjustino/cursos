from random import randint
print(';' * 40)
print(';' * 9, 'Jogo do Par ou Impar', ';' *9)
print(';' * 40)


totalVitorias = 0
while True:

    valorUser = int(input('Digite um valor: '))
    parOuImpar = str(input('Par ou Ímpar? [P/I] ')).upper()
    while parOuImpar not in 'PI':
        parOuImpar = str(input('Par ou Ímpar? [P/I] ')).upper()

    valorPC = randint(1, 10)

    total = valorUser + valorPC
    resultadoParOuImpar = total % 2

    print('-' * 50)
    if resultadoParOuImpar == 1 and parOuImpar == 'I':
        print('Você ganhou!')
        print(f'Computador escolheu {valorPC} e você {valorUser}. Total da {valorPC + valorUser} que é Ímpar')
        totalVitorias += 1

    if resultadoParOuImpar == 1 and parOuImpar == 'P':
        print('Você perdeu!')
        print(f'Computador escolheu {valorPC} e você {valorUser}. Total da {valorPC + valorUser} que é Ímpar')
        break

    if resultadoParOuImpar == 0 and parOuImpar == 'P':
        print('Você ganhou!')
        print(f'Computador escolheu {valorPC} e você {valorUser}. Total da {valorPC + valorUser} que é Par')
        totalVitorias += 1

    if resultadoParOuImpar == 0 and parOuImpar == 'I':
        print('Você perdeu!')
        print(f'Computador escolheu {valorPC} e você {valorUser}. Total da {valorPC + valorUser} que é Par')
        break
    print('-' * 50)


print(f'Game Over! Você venceu {totalVitorias} vezes')
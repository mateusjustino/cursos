n1 = int(input('Digite um valor: '))

soma = n1
count = 1
maior = n1
menor = n1

pergunta = str(input('Deseja digitar outros valores (S/N)? ')).upper()
while pergunta == 'S':
    n1 = int(input('Digite outro valor: '))
    soma += n1
    if n1 > maior:
        maior = n1
    if n1 < menor:
        menor = n1
    pergunta = str(input('Deseja digitar outros valores (S/N)? ')).upper()
    count += 1

print('\nA média foi de {}, o maior foi {} e o menor foi {}'.format(soma / count, maior, menor))

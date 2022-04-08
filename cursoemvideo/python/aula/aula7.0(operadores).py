n1 = int(input('Digite um valor: '))
n2 = int(input('Outro valor: '))
soma = n1 + n2
multi = n1 * n2
divisao = n1 / n2
diviInteira = n1 // n2
potencia = n1 ** n2
print('A soma é {}, \no produto é {} e a \ndivisao é {:.3f}'.format(soma, multi, divisao), end=' ')
print('Divisao inteira {} e potencia {}'.format(diviInteira,potencia))
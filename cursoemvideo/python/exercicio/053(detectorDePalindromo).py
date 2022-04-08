nome = str(input('Digite uma frase: '))
nomeAlterado = nome.replace(" ", "").upper()

novaPalavra = str('')

for x in range(1, len(nomeAlterado) + 1):
    ultimaLetra = nomeAlterado[-1:]
    nomeAlterado = nomeAlterado[:-1]
    novaPalavra = novaPalavra + ultimaLetra


if novaPalavra == nome.replace(" ", "").upper():
    print('A frase {} é um políndromo'.format(nome.strip()))
else:
    print('A frase {} não é um políndromo'.format(nome.strip()))

# ou faz assim
print('\n Outro jeito de fazer \n')
palavras = nome.upper().split()
junto = ''.join(palavras)
inverso = ''
for letra in range(len(junto) - 1, -1, -1):
    inverso += junto[letra]
print('O inverso de {} é {}'.format(junto, inverso))
if inverso == junto:
    print('Temos um palíndromo!')
else:
    print('A frase digitada não é um palíndromo!')


# ou faz assim
print('\n Outro jeito de fazer \n')
palavras = nome.upper().split()
junto = ''.join(palavras)
inverso = junto[::-1]
print('O inverso de {} é {}'.format(junto, inverso))
if inverso == junto:
    print('Temos um palíndromo!')
else:
    print('A frase digitada não é um palíndromo!')

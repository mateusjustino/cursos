nome = 'Pedro Silva Mendonça'
print("O nome com todas as letras maiusculas:")
print(nome.upper())
print("O nome com todas as letras minusculas:")
print(nome.lower())

#da pra fazer assim
print('(Primeiro jeito) Quantas letras ao todo(sem considerar os espaços):')
print(len(nome.strip().replace(" ", "")))
#ou assim
print('(Segundo jeito) Quantas letras ao todo(sem considerar os espaços):')
print(len(nome) - nome.count(' '))

#da pra fazer assim
print('(Primeiro jeito) Quantas letras tem o primeiro nome:')
nomeSeparado = nome.split()
print(len(nomeSeparado[0]))
#ou assim
print('(Segundo jeito) Quantas letras tem o primeiro nome:')
print(nome.find(' '))

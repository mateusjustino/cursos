texto = 'Python'

for letra in texto:    #irá printar cada letra do texto em uma linha
    print(letra)

print()
for n, letra in enumerate(texto): #irá printar o N e a letra do texto em sequencia
    print(n, letra)


print()
#for in range(start=0, stop, step=1)
for n in range(10): #do 0 ao 9
    print(n)

print()
for a in range(20, 10, -1): #do 20 ao 11
    print(a)

print()
for n in range(0, 100, 8): #tanto esse como o laço de baixo pega os multiplos de 8
    print(n)
print()
for n in range(100):
    if n % 8 == 0:
        print(n)

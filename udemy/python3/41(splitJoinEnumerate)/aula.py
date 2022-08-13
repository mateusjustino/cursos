def espaco():
    print('==============================')

string = "O Brasil é o pais do futebol, o Brasil é penta."
lista1 = string.split(' ')
lista2 = string.split(',') #.split devide as palavras de uma string com caracter vc quiser

for valor in lista1:
    print(f'A palavra {valor} apareceu {lista1.count(valor)}x na frase')

espaco()
palavra = ''
contagem = 0
for valor in lista1:
    qtdeVezes = lista1.count(valor)
    if qtdeVezes > contagem:
        contagem = qtdeVezes
        palavra = valor
print(f'A palavra que apareceu mais vezes é {palavra} ({contagem}x)')

espaco()
for valor in lista2:
    print(valor.strip().capitalize()) #.capitalize para iniciar cada valor com letra maiuscula

espaco()
string2 = ','.join(lista1) #.join junta os itens de uma lista para uma string com o separador desejado
print(string2)

espaco()
for v1, v2 in enumerate(lista1):
    print(f'O indice é: "{v1}" ||| e o valor é: "{v2}" ||| tbm tem valor assim: "{lista1[v1]}"')

espaco()
lista = [
    [1, 2],
    [3, 4],
    [5, 6],
]
for v in lista:
    print(v[0], v[1])

espaco()
lista = ['Mateus', 'Joao', 'Maria']
n1, n2, n3 = lista    # dando um valor para variavel atraves de uma lista
print(n2)

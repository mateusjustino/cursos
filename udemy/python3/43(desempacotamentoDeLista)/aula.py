lista = ['Luiz', 'Joao', 'Maria', 1, 2, 3, 4, 5]

n1, n2, *outraLista = lista #com o * joga todo o restante dos valores em uma lista

print(n1, n2, outraLista)

n1, n2, *outraLista, ultimoDaLista = lista #com * joga o que resta em uma lista

print(n1, n2, outraLista, ultimoDaLista)
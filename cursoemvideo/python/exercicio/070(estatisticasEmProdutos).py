print('=' * 30)
print('\033[35m          Simplex \033[m')
print('=' * 30)

totalCompra = produtosMais1000 = 0

nomeProdutoBarato = ''
precoProdutoBarato = 0

while True:
    nomeProduto = str(input('\nNome do Produto: '))
    preco = float(input('Preço: R$ '))

    totalCompra += preco

    if preco > 1000:
        produtosMais1000 += 1

    if nomeProdutoBarato == '':
        nomeProdutoBarato = nomeProduto
        precoProdutoBarato = preco

    if preco < precoProdutoBarato:
        nomeProdutoBarato = nomeProduto
        precoProdutoBarato = preco

    pergunta = str(input('\nQuer continuar? [S/N] ')).upper()
    while pergunta not in 'SN':
        pergunta = str(input('Quer continuar? [S/N] ')).upper()
    if pergunta == 'N':
        break

print('\n======== Estatísticas ========\n')
print(f'''O total da compra foi R${totalCompra:.2f}
Temos {produtosMais1000} produtos custando mais de R$1000,00
O produto mais barato foi {nomeProdutoBarato} que custa R${precoProdutoBarato:.2f}''')
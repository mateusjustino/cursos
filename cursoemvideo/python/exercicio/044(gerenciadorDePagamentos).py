preco = float(input('Digite o preço do produto: '))
print('[ 1 ] Se deseja pagar à vista com dinheiro/cheque com 10% de desconto')
print('[ 2 ] Se deseja pagar à vista no cartão com 5% de desconto')
print('[ 3 ] Se deseja pagar em até 2 vezes no cartão sem desconto')
print('[ 4 ] Se deseja pagar em 3 vezes ou mais no cartão com 20% de juros')
condicao = int(input('Digite a opção que deseja: '))
if condicao == 1:
    novoPreco = preco / 100 * 90
    print('À vista com dinheiro/cheque com 10% de desconto sai por R${:.2f}'.format(novoPreco))
elif condicao == 2:
    novoPreco = preco / 100 * 95
    print('À vista no cartão com 5% de desconto sai por R${:.2f}'.format(novoPreco))
elif condicao == 3:
    parcela = preco / 2
    print('Em 2 vezes no cartão cada parcela sairá por R${:.2f}'.format(parcela))
elif condicao == 4:
    qtde = int(input('Em quantas vezes: '))
    novoPreco = preco / 100 * 120
    parcela = novoPreco / qtde
    print('Em {} vezes no cartão o total será de R${:.2f} e cada parcela será de R${:.2f}'.format(qtde, novoPreco, parcela))
else:
    print('Condição inválido')


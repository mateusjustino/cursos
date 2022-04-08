km = float(input('Quantos KM foram percorridos: '))
dias = int(input('Por quantos dias foi alugado: '))
kmPreco = 0.15 * km
diasPreco = 60 * dias
total = kmPreco + diasPreco
print('O preço do KM ficou em {:.2f} e o de dias {}, o total deu {:.2f}'.format(kmPreco, diasPreco, total))
casa = float(input('Digite o valor da casa: R$'))
salario = float(input('Digite o salário: R$'))
anos = int(input('Em quantos anos vai pagar: '))
cores = {'limpa':'\033[m',
         'verde':'\033[32m',
         'vermelho':'\033[31m'}
meses = anos * 12

parcela = casa / meses

trintaSalario = salario / 100 * 30

if parcela > trintaSalario:
    print('Empréstimo negado! A prestação seria de {}R${:.2f}{} excedendo 30% do salário(R${:.2f})!'.format(cores['vermelho'], parcela, cores['limpa'], trintaSalario))
else:
    print('Empréstimo aprovado! A prestação será de {}R${:.2f}{}'.format(cores['verde'], parcela, cores['limpa']))

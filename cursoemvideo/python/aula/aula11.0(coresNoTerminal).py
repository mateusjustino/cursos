'''
style: estilo do texto pode ser 0(none), 1(bold), 4(underline) e 7(negative)
text: cor da font pode ser 30(branco), 31(vermelho), 32(verde), 33(amarelo), 34(azul), 35(roxo), 36(ciano) e 37(cinza)
back: cor de fundo do texto 40(branco), 41(vermelho), 42(verde), 43(amarelo), 44(azul), 45(roxo), 46(ciano) e 47(cinza)

a estrutura se monta assim        \033[0;33;44m]
'''

print('\033[1;31;42mOlá , Mundo!\033[m')
print('\033[35mOlá, Mundo!\033[m')

nome = 'Mateus'
print('Olá! Prazer em te conhecer, {}{}{}!!!'.format('\033[4;36m', nome, '\033[m'))

cores = {'limpa':'\033[m',
         'azul':'\033[34m',
         'amarelo':'\033[33m',
         'pretoEBranco':'\033[7;30m'}
print('Olá! Prazer em te conhecer, {}{}{}!!!'.format(cores['amarelo'], nome, cores['limpa']))

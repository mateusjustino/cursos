d1 = {'chave1': 'valor da chave'}
d1['novaChave'] = 'valor da nova chave'

print(d1)

d1 = dict(chave1 = 'valor da chave', chave2 = 'valor da outra chave')
d1['novaChave'] = 'valor da nova chave'

print(d1)

d1 = {
    'str' : 'valor',
    123 : 'outro valor',
    (1,2,3,4) : 'tupla',
}
print(d1[(1,2,3,4)]) # aqui seleciono a chave especifica do dict que eu quero

if d1.get('nomedachave') is not None:
    print(d1.get('nomedachave'))
else:
    print(f'chave "nomedachave" nao existe')

d1.update({'novaChave': 'novoValor'}) #edita ou cria nova chave
if d1.get('novaChave') is not None:
    print(d1.get('novaChave'))

del d1['str'] # para deletar uma chave
print(d1)

print(123 in d1) # checo se tem a chave 123 em d1
print('tupla' in d1.values()) # checo se tem a string 'tupla' nos valores de d1

for k in d1: # printa as chaves do dicionario
    print(k)
for k in d1.items(): # printo as chaves e os valores
    print(k)
for k, v in d1.items(): # printo as chaves e os valores separadamente
    print(k, v)
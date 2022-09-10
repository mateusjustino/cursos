def funcao():
    print('Hello World!')

funcao()
funcao()

def funcao(msg):
    print(msg)

funcao('Hello Worddd')
funcao('Nova mensagem')

def funcao(msg, nome):
    print(msg, nome)

funcao('Hello Worddd', 'Mateus')
funcao('Nova mensagem', 'Mariana')

def funcao(msg = 'Olá', nome = 'Usuario'):
    nome, msg = nome.replace('e', '3'), msg.replace('a', '4')
    print(msg, nome)

funcao('Hello Worddd', 'Mateus')
funcao()
funcao('Nova mensagem', 'Mariana')
funcao(nome = 'zezinho', msg = 'Hello')

def funcao(msg = 'Olá', nome = 'Usuario'):
    return f'{msg}, {nome}'

variavel = funcao()
print(variavel)
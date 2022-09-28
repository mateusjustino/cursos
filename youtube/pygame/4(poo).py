class Cachorros:
    def __init__(self, nome, corDePelo, idade, tamanho): # classe construtora, onde vai os atributos da classe
        self.nome = nome
        self.corDePelo = corDePelo
        self.idade = idade
        self.tamanho = tamanho

    def latir(self): # aqui é um metodo da classe
        print('au au')
    def correr(self):
        print(f'{self.nome} esta correndo')

cachorro1 = Cachorros('Toby', 'marrom', 5, 'grande') # objeto criado

print(f'O nome do cachorro é: {cachorro1.nome}')
print(f'A idade do cachorro é: {cachorro1.idade}')

cachorro1.idade = 8
print(f'A idade do cachorro é: {cachorro1.idade}')
cachorro1.latir()
cachorro1.correr()

cachorro2 = Cachorros('Max', 'preto', 3, 'pequeno')

print(f'O {cachorro1.nome} tem {cachorro1.idade} anos e o {cachorro2.nome} tem {cachorro2.idade} anos')

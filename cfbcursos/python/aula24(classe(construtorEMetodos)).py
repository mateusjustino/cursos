class carro:
    velMax = 0
    ligado = False
    cor = ''

    def __init__(self, v, l, c):            #esse é o construtor, permite já passar os valores de entradas
        self.velMax = v
        self.ligado = l
        self.cor = c

    def mostrar(self):                                      # um metodo que pode ser chamado
        print(f'Velocidade Máxima:... {self.velMax}')
        print(f'Cor:................. {self.cor}')
        estado = 'Sim' if self.ligado else 'Não'
        print(f'Ligado:.............. {estado}')
        print('-' * 30)

    def ligar(self):
        self.ligado = True

    def desligar(self):
        self.ligado = False

    def andar(self):
        if self.ligado:
            return 'andando'
        else:
            return 'parado'


c1 = carro(200, False, 'Preto')
c2 = carro(120, False, 'Branco')
c3 = carro(350, False, 'Vermelho')

c1.ligar()            #ativei o metodo ligar

c1.mostrar()
c2.mostrar()
c3.mostrar()


print(f'O carro 1 está {c1.andar()}')
print(f'O carro 2 está {c2.andar()}')


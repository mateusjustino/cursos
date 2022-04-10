class npc:           # classe pai
    def __init__(self, nome, time, forca, municao):               # construtor
        self.nome = nome
        self.time = time
        self.forca = forca
        self.municao = municao
        self.vivo = True
        self.energia = 100

    def info(self):
        print(f'Nome......: {self.nome}')
        print(f'Time......: {self.time}')
        print(f'Forca.....: {self.forca}')
        print(f'Munição...: {self.municao}')
        print(f'Vivo......: {"Sim" if self.vivo else "Não"}')
        print(f'Energia...: {self.energia}')
        print('-' * 40)


class soldado(npc):          # classe filho        a classe filho sobrescreve a classe pai
    def __init__(self, nome, time):
        self.forca = 200
        self.municao = 200
        super().__init__(nome, time, self.forca, self.municao)


class guarda(npc):
    def __init__(self, nome, time):
        self.forca = 100
        self.municao = 20
        super().__init__(nome, time, self.forca, self.municao)


class elite(npc):
    def __init__(self, nome, time):
        self.forca = 400
        self.municao = 500
        super().__init__(nome, time, self.forca, self.municao)

    def inf(self):
        super().info()


s1 = guarda('Olho Vivo', 1)
s2 = soldado('Bala na Agulha', 1)
s3 = elite('Ninja', 1)
s4 = guarda('Super Atento', 2)
s5 = soldado('Tiro Certo', 2)
s6 = elite('Samurei', 2)

s1.vivo = False
s5.vivo = False

s1.info()
s2.info()
s3.info()
s4.info()
s5.info()
s6.inf()

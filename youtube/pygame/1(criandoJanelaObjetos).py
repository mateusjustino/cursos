import pygame

from pygame.locals import * # aqui importo algumas funções, como o QUIT
from sys import exit # aqui importo funções do sistema, como exit, para fechar a janela

#inicializa as funções da biblioteca
pygame.init()

largura = 640
altura = 480
x = 0
y = 0

#defino o tamanho da minha janela
tela = pygame.display.set_mode((largura, altura))
#defino o titulo da janela
pygame.display.set_caption('Hello World')
relogio = pygame.time.Clock() # crio a variavel com o time.clock()

while True:
    relogio.tick(60) # aqui controlo o fps
    tela.fill((0, 0, 0)) # a cada loop a tela é preenchida com a cor escolhida (isso para quando mover os objetos eles nao ficarem arrastados pela tela)
    for event in pygame.event.get(): # aqui para pegar algum evento que ocorreu no game
        if event.type == pygame.locals.QUIT: # pego o evento de quando fecha a janela
            pygame.quit()
            exit()

    pygame.draw.rect(tela, (255, 0, 0), (x, y, 40, 50), border_radius=5) # desenho o retangulo

    if y >= altura:
        y = 0
    y += .5
    if x >= largura:
        x = 0
    x += .5
    

    pygame.display.update() # aqui para sempre atualizar o game
from curses.ascii import alt
import pygame

from pygame.locals import * # aqui importo algumas funções, como o QUIT
from sys import exit # aqui importo funções do sistema, como exit, para fechar a janela

#inicializa as funções da biblioteca
pygame.init()

largura = 640
altura = 480
x = largura / 2
y = altura / 2
passo = 5

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
        ''' # aqui são eventos de quando se pressiona teclas
        if event.type == KEYDOWN: # aqui checo se alguma tecla foi pressionada
            if event.key == K_a: # aqui checo se a tecla "a" foi pressionada
                x -= passo # movimento meu retangulo para esquerda
            if event.key == K_d: # aqui checo se a tecla "d" foi pressionada
                x += passo # movimento meu retangulo para direita
            if event.key == K_w: # aqui checo se a tecla "w" foi pressionada
                y -= passo # movimento meu retangulo para cima
            if event.key == K_s: # aqui checo se a tecla "s" foi pressionada
                y += passo # movimento meu retangulo para baixo
                '''
    # aqui pego os botões que estao sendo pressionados
    if pygame.key.get_pressed()[K_a]:
        x -= passo
    if pygame.key.get_pressed()[K_d]:
        x += passo
    if pygame.key.get_pressed()[K_w]:
        y -= passo
    if pygame.key.get_pressed()[K_s]:
        y += passo

    if y >= altura:
        y = 0
    if y < 0:
        y = altura

    if x >= largura:
        x = 0
    if x < 0:
        x = largura

    pygame.draw.rect(tela, (255, 0, 0), (x, y, 40, 50), border_radius=5) # desenho o retangulo

        

    pygame.display.update() # aqui para sempre atualizar o game
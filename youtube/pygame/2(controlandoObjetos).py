from curses.ascii import alt
import pygame
from random import randint

from pygame.locals import * # aqui importo algumas funções, como o QUIT
from sys import exit # aqui importo funções do sistema, como exit, para fechar a janela

#inicializa as funções da biblioteca
pygame.init()

musicaDeFundo = pygame.mixer.music.load('/home/admin/Documents/cursos/youtube/pygame/sound/battle-of-the-dragons-8037.mp3') # aqui seleciono a musica
pygame.mixer.music.play(-1) # aqui para dar play, o -1 é para ficar sempre tocando
pygame.mixer.music.set_volume(0.1) # o volume vai entre 0 e 1

somColisao = pygame.mixer.Sound('/home/admin/Documents/cursos/youtube/pygame/sound/smw_coin.wav') # tirando a musica de fundo, as outras tem que ser .wav
somColisao.set_volume(0.5) #o volume vai entre 0 e 1

largura = 640
altura = 480
x = largura / 2
y = altura / 2
passo = 5

xAzul = randint(40, 600)
yAzul = randint(50, 430)

fonte = pygame.font.SysFont('arial', 40, True, True) # font, tamanho, negrito, italico
pontos = 0


#defino o tamanho da minha janela
tela = pygame.display.set_mode((largura, altura))
#defino o titulo da janela
pygame.display.set_caption('Hello World')
relogio = pygame.time.Clock() # crio a variavel com o time.clock()

while True:
    relogio.tick(60) # aqui controlo o fps
    tela.fill((0, 0, 0)) # a cada loop a tela é preenchida com a cor escolhida (isso para quando mover os objetos eles nao ficarem arrastados pela tela)
    mensagem = f'Pontos: {pontos}'
    texto = fonte.render(mensagem, True, (255, 255, 255)) #crio o texto, com a mgm, o antialias que deixar mais liso menos serrilhado, a cor do texto
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

    retVermelho = pygame.draw.rect(tela, (255, 0, 0), (x, y, 40, 50), border_radius=5) # desenho o retangulo
    retAzul = pygame.draw.rect(tela, (0, 0, 255), (xAzul, yAzul, 40, 50), border_radius=5)
    
    if retVermelho.colliderect(retAzul): # colliderect é o metodo para checar um retangulo colide com outro
        xAzul = randint(40, 600)
        yAzul = randint(50, 430) 
        pontos += 1
        somColisao.play()

    tela.blit(texto, (400, 30)) # coloco a mensagem que quero e as coordenadas

    pygame.display.update() # aqui para sempre atualizar o game



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

xCobra = largura / 2
yCobra = altura / 2

velocidade = 4
xControle = velocidade
yControle = 0

xMaca = randint(40, 600)
yMaca = randint(50, 430)

fonte = pygame.font.SysFont('arial', 40, True, True) # font, tamanho, negrito, italico
pontos = 0


#defino o tamanho da minha janela
tela = pygame.display.set_mode((largura, altura))
#defino o titulo da janela
pygame.display.set_caption('Hello World')
relogio = pygame.time.Clock() # crio a variavel com o time.clock()

listaCobra = []
comprimentoInicial = 50
morreu = False

def aumentaCobra(listaCobra): # aqui vou aumentando a cobra, pegando o x e y que estao dentro da minha lista e aumentando a cobra
    for XeY in listaCobra:
        pygame.draw.rect(tela, (0, 255, 0), (XeY[0], XeY[1], 20, 20), border_radius=5)

def reiniciarJogo():
    global pontos, comprimentoInicial, xCobra, yCobra, listaCobra, listaCabeca, xMaca, yMaca, morreu
    pontos = 0
    comprimentoInicial = 5
    xCobra = largura / 2
    yCobra = altura / 2
    listaCobra = []
    listaCabeca = []
    xMaca = randint(40, 600)
    yMaca = randint(50, 430)
    morreu = False

while True:
    relogio.tick(60) # aqui controlo o fps
    tela.fill((0, 0, 0)) # a cada loop a tela é preenchida com a cor escolhida (isso para quando mover os objetos eles nao ficarem arrastados pela tela)
    mensagem = f'Pontos: {pontos}'
    texto = fonte.render(mensagem, True, (255, 255, 255)) #crio o texto, com a mgm, o antialias que deixar mais liso menos serrilhado, a cor do texto
    for event in pygame.event.get(): # aqui para pegar algum evento que ocorreu no game
        if event.type == pygame.locals.QUIT: # pego o evento de quando fecha a janela
            pygame.quit()
            exit()

        
        if event.type == KEYDOWN: # aqui checo se alguma tecla foi pressionada
            if event.key == K_a: # aqui checo se a tecla "a" foi pressionada
                if xControle == velocidade:
                    pass
                else:
                    xControle = - velocidade
                    yControle = 0
            if event.key == K_d: # aqui checo se a tecla "d" foi pressionada
                if xControle == - velocidade:
                    pass
                else:
                    xControle = velocidade
                    yControle = 0
            if event.key == K_w: # aqui checo se a tecla "w" foi pressionada
                if yControle == velocidade:
                    pass
                else:
                    xControle = 0
                    yControle = - velocidade
            if event.key == K_s: # aqui checo se a tecla "s" foi pressionada
                if yControle == - velocidade:
                    pass
                else:
                    xControle = 0
                    yControle = velocidade
                
    xCobra += xControle
    yCobra += yControle

    cobra = pygame.draw.rect(tela, (0, 255, 0), (xCobra, yCobra, 20, 20), border_radius=5) # desenho o retangulo
    maca = pygame.draw.rect(tela, (0, 0, 255), (xMaca, yMaca, 20, 20), border_radius=5)
    
    if cobra.colliderect(maca): # colliderect é o metodo para checar um retangulo colide com outro
        xMaca = randint(40, 600)
        yMaca = randint(50, 430) 
        pontos += 1
        somColisao.play()
        comprimentoInicial += 1

    listaCabeca = []
    listaCabeca.append(xCobra)
    listaCabeca.append(yCobra)

    listaCobra.append(listaCabeca)

    if listaCobra.count(listaCabeca) > 1:
        fonte2 = pygame.font.SysFont('arial', 20, True, True)
        mensagem2 = 'Game Over! Pressione a tecla "R" para jogar novamente'
        texto2 = fonte2.render(mensagem2, True, (255, 255, 255))
        retTexto2 = texto2.get_rect() # aqui eu pego os valores do tamanho do retangulo do texo
        morreu = True
        while morreu:
            tela.fill((50, 50, 50))
            for event in pygame.event.get():
                if event.type == QUIT:
                    pygame.quit()
                    exit()
                if event.type == KEYDOWN:
                    if event.key == K_r:
                        reiniciarJogo()
            retTexto2.center = (largura//2, altura//2) # duas barras retornam o valor inteiro da divisão, e aqui pego o ponto central do retangulo e posiciono no centro da tela
            tela.blit(texto2, retTexto2)
            pygame.display.update()

    if xCobra > largura:
        xCobra = 0
    if xCobra < 0:
        xCobra = largura

    if yCobra > altura:
        yCobra = 0
    if yCobra < 0:
        yCobra = altura

    if len(listaCobra) > comprimentoInicial:
        del listaCobra[0]

    aumentaCobra(listaCobra)

    tela.blit(texto, (400, 30)) # coloco a mensagem que quero e as coordenadas

    pygame.display.update() # aqui para sempre atualizar o game


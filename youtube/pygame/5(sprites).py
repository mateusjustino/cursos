import pygame, sys

pygame.init()

largura = 640
altura = 480

black = (40, 40, 40)

tela = pygame.display.set_mode((largura, altura))
pygame.display.set_caption('Sprites')

class Sapo(pygame.sprite.Sprite): # aqui minha classe que criei herda a classe Sprite do pygame
    def __init__(self):
        pygame.sprite.Sprite.__init__(self) 
        self.sprites = [] # aqui crio uma lista
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_1.png')) # adiciona as imagens na lista
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_2.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_3.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_4.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_5.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_6.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_7.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_8.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_9.png'))
        self.sprites.append(pygame.image.load('/home/admin/Documents/cursos/youtube/pygame/sprites/attack_10.png'))
        self.atual = 0
        self.image = self.sprites[self.atual] # defino a primeira imagem
        self.image = pygame.transform.scale(self.image, (128*3, 64*3)) # aqui aumento o tamanho da imagem, pega a resolução original dela e ampliando vezes 3

        self.rect = self.image.get_rect()
        self.rect.topleft = 100, 100

        self.animar = False

    def atacar(self):
        self.animar = True

    def update(self):
        if self.animar == True:
            self.atual += 0.2 # pois aqui marca qual a minha atual imagem, mas tambem é onde atualiza a minha tela, para nao deixar rapido deixo apenas em 0.05
            if self.atual >= len(self.sprites): # checo se a variavel atual não é maior ou igual ao numero total de imgs da minha lista de sprites
                self.atual = 0 # aqui reseto as imagens
                self.animar = False # aqui paro a animação
            self.image = self.sprites[int(self.atual)] #mudo a image para a sprite atual (deixo o self.atual em int para pegar apenas o valor inteiro de atual)
            self.image = pygame.transform.scale(self.image, (128*3, 64*3)) # aqui aumento o tamanho da imagem, pega a resolução original dela e ampliando vezes 3

sapo1 = Sapo()
todasSprites = pygame.sprite.Group()
todasSprites.add(sapo1)

clock = pygame.time.Clock()
while True:
    tela.fill(black)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            sapo1.atacar()
    todasSprites.draw(tela)
    todasSprites.update()
    pygame.display.flip()
    clock.tick(60)
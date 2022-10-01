import pygame, sys, os, random

pygame.init()
pygame.mixer.init()

directoryPrincipal = os.path.dirname(__file__) # aqui eu pego o local em que esta o meu arquivo atualmente
directoryImages = os.path.join(directoryPrincipal, 'sprites')
directorySound = os.path.join(directoryPrincipal, 'sound/dino')

screenWidth, screenHeight = 640, 480

white = (230, 230, 230)

screen = pygame.display.set_mode((screenWidth, screenHeight))
pygame.display.set_caption('Dino Game')

spriteSheet = pygame.image.load(os.path.join(directoryImages, 'dinoSpritesheet.png')).convert_alpha() # .conver_alpha conversa a transparencia da imagem

soundCollision = pygame.mixer.Sound(os.path.join(directorySound, 'death_sound.wav'))
soundCollision.set_volume(1)
collided = False

choiceObstacle = random.choice([0, 1])

class Dino(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.soundJump = pygame.mixer.Sound(os.path.join(directorySound, 'jump_sound.wav')) # seleciono o arquivo de som
        self.soundJump.set_volume(1) # volume 1 é o maximo, varia entre 0 e 1, podendo ser float
        self.imagesDino = [] # crio a lista para as imgs do dino
        for i in range(3):
            img = spriteSheet.subsurface((i * 32, 0), (32, 32)) # aqui eu pego uma das imagens da spritesheet
            img = pygame.transform.scale(img, (32 * 3, 32 * 3)) # aqui eu aumento o tamanho da imagem
            self.imagesDino.append(img) # aqui eu adiciono a img na minha lista

        self.indexList = 0 #aqui deixo meu index em 0, ele servira para alternar entre os index da minha lista de img
        self.image = self.imagesDino[self.indexList] #crio uma imagem de acordo com o index atual da minha lista de img de dino
        self.rect = self.image.get_rect() # aqui pego o formato retangular da minha imagem
        self.mask = pygame.mask.from_surface(self.image) # aqui crio uma mascara da imagem do dinossauro
        self.posYStart = screenHeight - 64 - 96//2 #pego o 96 pois é a atual altura da minha imagem que foi ampliada por 3, e divido por 2 para pegar o centro do Y da minha imagem
        self.rect.center = (100, screenHeight - 64) # aqui eu o posiciono o centro dele onde quiser
        self.jump = False
    
    def toJump(self):
        self.jump = True
        self.soundJump.play()

    def update(self):
        if self.jump == True:
            if self.rect.y <= 200:
                self.jump = False
            self.rect.y -= 20
        else:
            if self.rect.y < self.posYStart:
                self.rect.y += 20
            else:
                self.rect.y = self.posYStart
        
        if self.indexList > 2:
            self.indexList = 0
        self.indexList += 0.25 # uso 0.25 para demorar um pouco mais para trocar de img na lista
        self.image = self.imagesDino[int(self.indexList)] # aqui eu só pego o numero inteiro do indexList

            
class Clouds(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = spriteSheet.subsurface((7*32, 0), (32, 32))
        self.image = pygame.transform.scale(self.image, (32 * 3, 32 * 3))
        self.rect = self.image.get_rect()
        self.rect.y = random.randrange(50, 200, 50)
        self.rect.x = random.randrange(0, screenWidth, 50)

    def update(self):
        if self.rect.right < 0:            
            self.rect.left = screenWidth
            self.rect.y = random.randrange(50, 200, 50)
        self.rect.x -= 10

class Ground(pygame.sprite.Sprite):
    def __init__(self, posX):
        pygame.sprite.Sprite.__init__(self)
        self.image = spriteSheet.subsurface((6*32, 0), (32, 32))
        self.image = pygame.transform.scale(self.image, (32*2, 32*2))
        self.rect = self.image.get_rect()
        self.rect.y = screenHeight - 64
        self.rect.x = posX * 64

    def update(self):
        if self.rect.topright[0] < 0: # topright[0] é a posicao x, pois topright[x][y]
            self.rect.x = screenWidth
        self.rect.x -= 10

class Cacto(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.image = spriteSheet.subsurface((5*32, 0), (32, 32))
        self.image = pygame.transform.scale(self.image, (32*2, 32*2))
        self.rect = self.image.get_rect()
        self.mask = pygame.mask.from_surface(self.image)
        self.choice = choiceObstacle
        self.rect.center = (screenWidth, screenHeight - 64)
        self.rect.x = screenWidth
    
    def update(self):
        if self.choice == 0:
            if self.rect.topright[0] < 0:
                self.rect.x = screenWidth
            self.rect.x -= 10

class FlyingDino(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.imagesFlyingDino = []
        for i in range(3, 5):
            img = spriteSheet.subsurface((32*i, 0), (32, 32))
            img = pygame.transform.scale(img, (32*3, 32*3))
            self.imagesFlyingDino.append(img)

        self.indexList = 0
        self.image = self.imagesFlyingDino[self.indexList]
        self.mask = pygame.mask.from_surface(self.image)
        self.choice = choiceObstacle
        self.rect = self.image.get_rect()
        self.rect.center = (screenWidth, 300)
        self.rect.x = screenWidth

    def update(self):
        if self.choice == 1:
            if self.rect.topright[0] < 0:
                self.rect.x = screenWidth
            self.rect.x -= 10

            if self.indexList > 1:
                self.indexList = 0
            self.indexList += 0.25
            self.image = self.imagesFlyingDino[int(self.indexList)]


allSprites = pygame.sprite.Group()
dino = Dino()
allSprites.add(dino)


for i in range(6):
    cloud = Clouds()    
    allSprites.add(cloud)

for i in range((screenWidth + 64)// 64): # pego a largura da tela e divido por 64(tamanho da imagem do chao com scale)
    ground = Ground(i)
    allSprites.add(ground)

cacto = Cacto()
allSprites.add(cacto)

flyingDino = FlyingDino()
allSprites.add(flyingDino)

obstaclesGroup = pygame.sprite.Group()
obstaclesGroup.add(cacto) # aqui crio um grupo dos objetos que vao colidir e adicionos eles no grupo
obstaclesGroup.add(flyingDino)

clock = pygame.time.Clock()
while True:
    clock.tick(30)
    screen.fill(white)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_SPACE:
                if dino.rect.y == dino.posYStart: # aqui só posso pular se o dino estiver no chao
                    dino.toJump()

    collisions = pygame.sprite.spritecollide(dino, obstaclesGroup, False, pygame.sprite.collide_mask) # aqui cria uma lista com as colisões do objeto (objeto principal, grupo que pode colidir, False para nao apagar o objeto da tela, e a função fazendo o tipo de colisão que nesse caso é a mask)
    
    allSprites.draw(screen) #aqui desenho as sprites

    if cacto.rect.topright[0] <= 0 or flyingDino.rect.topright[0] <= 0:
        choiceObstacle = random.choice([0, 1])
        print(choiceObstacle)
        cacto.rect.x = screenWidth
        flyingDino.rect.x = screenWidth
        cacto.choice = choiceObstacle
        flyingDino.choice = choiceObstacle


    if collisions and collided == False: # aqui checo se ouve colisao e se nao nao teve nenhuma ainda
        collided = True
        soundCollision.play()

    if collided == True:  # aqui checo se ouve alguma colisao, se nao atualizo o game
        pass        
    else:        
        allSprites.update()

    pygame.display.flip()
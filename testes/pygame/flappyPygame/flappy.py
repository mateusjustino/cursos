import pygame, sys, os, random

pygame.init()

screenWidth = 640
screenHeight = 480
screen = pygame.display.set_mode((screenWidth, screenHeight))
pygame.display.set_caption('Flappy Bird')
clock = pygame.time.Clock()

mainDirectory = os.path.dirname(__file__)
spritesDirectory = os.path.join(mainDirectory, 'sprites/')

bgImage = pygame.image.load(os.path.join(spritesDirectory, 'bgDay.png'))
bgImage = pygame.transform.scale(bgImage, (screenWidth, screenHeight))

speedGame = 10
points = 0
currentRecord = 0
start = False

randomDifferencePipe = random.randint(-100, 50)

def showMessage(msg, size):
    font = pygame.font.SysFont('arial', size, True, False)
    return font.render(msg, True, (50, 50, 50))

def restart():
    global points, speedGame
    points = 0
    speedGame = 10
    bird.rect.topleft = screenWidth/2 - 50 , screenHeight/2
    pipeFromDown.rect.x = screenWidth
    pipeFromUp.rect.x = screenWidth


class Bird(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        self.imageBird = []
        self.imageBird.append(pygame.image.load(os.path.join(spritesDirectory, 'birdDownFlap.png')))
        self.imageBird.append(pygame.image.load(os.path.join(spritesDirectory, 'birdMidFlap.png')))
        self.imageBird.append(pygame.image.load(os.path.join(spritesDirectory, 'birdUpFlap.png')))
        self.imageBird.append(pygame.image.load(os.path.join(spritesDirectory, 'birdMidFlap.png')))
        self.imageBird.append(pygame.image.load(os.path.join(spritesDirectory, 'birdDownFlap.png')))
        
        self.indexImage = 0
        self.image = self.imageBird[self.indexImage]
        self.mask = pygame.mask.from_surface(self.image)

        self.rect = self.image.get_rect()
        self.rect.topleft = screenWidth/2 - 50 , screenHeight/2

        self.up = False
        self.upHeight = 5
        self.down = False
        self.downHeight = -5
        self.angleBird = 0

    def goUp(self):
        self.up = True
    def goDown(self):
        self.down = True

    def update(self):       

        if self.up == True:
            if self.upHeight > 0 and self.rect.y > 20:
                self.rect.y -= 10
                self.upHeight -= 1
                self.angleBird = 30
            else:
                self.up = False
                self.upHeight = 5
                self.angleBird = 0

        if self.down == True:
            if self.downHeight < 0 and self.rect.y < screenHeight - 50 - 32:
                self.rect.y += 10
                self.downHeight += 1
                self.angleBird = -30
            else:
                self.down = False
                self.downHeight = -5
                self.angleBird = 0
        
        if self.down == False and self.up == False:
            self.rect.y += 3
            self.angleBird = -30
        

        self.indexImage += 0.3
        if self.indexImage >= 5:
            self.indexImage = 0
        self.image = self.imageBird[int(self.indexImage)]
        self.image = pygame.transform.rotate(self.image, self.angleBird)


class Ground(pygame.sprite.Sprite):
    def __init__(self, posX):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load(os.path.join(spritesDirectory, 'ground.png'))
        self.rect = self.image.get_rect()
        self.rect.x = posX * 336
        self.rect.y = screenHeight - 50

    def update(self):
        if self.rect.right < 0:
            self.rect.x = screenWidth
        self.rect.x -= speedGame

class Pipe(pygame.sprite.Sprite):
    def __init__(self, side):
        pygame.sprite.Sprite.__init__(self)
        self.image = pygame.image.load(os.path.join(spritesDirectory, 'pipe.png'))
        self.mask = pygame.mask.from_surface(self.image)
        self.imageHeight = self.image.get_height()
        self.rect = self.image.get_rect()
        self.rect.x = screenWidth


        if side == 'up':
            self.image = pygame.transform.rotate(self.image, 180)
            self.rect.y = 0 - (self.imageHeight // 2) + randomDifferencePipe
        if side == 'down':
            self.rect.y = screenHeight - (self.imageHeight // 2) + randomDifferencePipe
    
    def update(self):
        if self.rect.right < 0:
            self.rect.x = screenWidth            
            if self.rect.bottom > screenHeight:
                self.rect.y = 0 - (self.imageHeight // 2) + randomDifferencePipe
                self.image = pygame.transform.rotate(self.image, 180)
            elif self.rect.top < 0:
                self.rect.y = screenHeight - (self.imageHeight // 2) + randomDifferencePipe
                self.image = pygame.transform.rotate(self.image, 180)

        self.rect.x -= speedGame


allSprites = pygame.sprite.Group()

bird = Bird()
pipeFromUp = Pipe('up')
pipeFromDown = Pipe('down')
allSprites.add(bird, pipeFromUp, pipeFromDown)

for i in range(10):
    ground = Ground(i)
    allSprites.add(ground)



obstaclesGroup = pygame.sprite.Group()
obstaclesGroup.add(pipeFromUp, pipeFromDown)

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        if event.type == pygame.KEYDOWN:            
            if event.key == pygame.K_UP:
                bird.goUp()
            if event.key == pygame.K_DOWN:
                bird.goDown()

            if event.key == pygame.K_r and (len(collisions) != 0 or bird.rect.y > screenHeight - 50 - 32):
                print('vai restarta')
                restart()
            if event.key == pygame.K_RETURN:
                start = True

    screen.blit(bgImage, (0, 0))
    allSprites.draw(screen)

    collisions = pygame.sprite.spritecollide(bird, obstaclesGroup, False, pygame.sprite.collide_mask)
    
    
    if len(collisions) != 0 and start == True or bird.rect.y > screenHeight - 50 - 32: # talvez colocando um OR aqui para quando o bird bater no chao
        
        gameOverText = showMessage(f'Game Over', 40)
        screen.blit(gameOverText, (screenWidth//2 + 50, screenHeight//2 - 50))
        restartText = showMessage(f'Press "r" to restart', 20)
        screen.blit(restartText, (screenWidth//2 + 50, screenHeight//2))

        if points > currentRecord:
            currentRecord = points
        

    else:
        if start == True:
            points += 1
            if points % 100 == 0:            
                speedGame += 1        

            randomDifferencePipe = random.randint(-100, 50)
            allSprites.update()

            
        else:
            
            startText = showMessage(f'Press "Enter" to start', 30)
            rectStartText = startText.get_rect()
            rectStartText.center = (screenWidth//2, screenHeight//2 - 50)
            screen.blit(startText, rectStartText)
    
    pointsText = showMessage(f'{points}', 40)
    screen.blit(pointsText, (10, 50))
    currentRecordText = showMessage(f'Record: {currentRecord}', 20)
    screen.blit(currentRecordText, (10, 20))

    speedGameText = showMessage(f'Speed :{speedGame}', 10)
    screen.blit(speedGameText, (10, screenHeight - 20))



    fps = clock.get_fps()
    fpsText = showMessage(f'FPS: {fps:.2f}', 10)
    screen.blit(fpsText, (screenWidth-80, screenHeight - 20))

    clock.tick(30)
    pygame.display.flip()


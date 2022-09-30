import pygame, sys, os

directoryPrincipal = os.path.dirname(__file__) # aqui eu pego o local em que esta o meu arquivo atualmente
directoryImages = os.path.join(directoryPrincipal, 'sprites')
directorySound = os.path.join(directoryPrincipal, 'sprites')

screenWidth, screenHeight = 640, 480

white = (255, 255, 255)

screen = pygame.display.set_mode((screenWidth, screenHeight))
pygame.display.set_caption('Dino Game')

class Dino(pygame.sprite.Sprite):
    def __init__(self):
        pygame.sprite.Sprite.__init__(self)
        pass

allSprites = pygame.sprite.Group()
dino = Dino()
allSprites.add(dino)

clock = pygame.time.Clock()

while True:
    clock.tick(30)
    screen.fill(white)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
    
    allSprites.draw(screen)
    allSprites.update()

    pygame.display.flip()
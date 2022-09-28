import pygame, sys, random, time

pygame.init()
clock = pygame.time.Clock()

screenWidth = 1280
screenHeight = 960
screen = pygame.display.set_mode((screenWidth, screenHeight))
pygame.display.set_caption('Pong')

# formato dos desenhos que vou usar
ball = pygame.Rect(screenWidth/2 - 15, screenHeight/2 - 15, 30, 30)
player = pygame.Rect(screenWidth - 20 - 300, screenHeight/2 - 70, 10 + 300, 140)
opponent = pygame.Rect(10, screenHeight/2 -70, 10, 140)


bgColor = pygame.Color('grey12')
lightGrey = (200, 200, 200)


ballSpeedX = 7 * random.choice((-1, 1))
ballSpeedY = 7 * random.choice((-1, 1))

playerSpeed = 0
opponentSpeed = 7

playerScore = 0
opponentScore = 0
gameFonte = pygame.font.SysFont('arial', 32, bold=True, italic=True) # o estilo da fonte que vou usar

def ballAnimation():
    global ballSpeedX, ballSpeedY, playerScore, opponentScore

    ball.x += ballSpeedX
    ball.y += ballSpeedY

    if ball.top <= 0 or ball.bottom >= screenHeight: # se bater em cima ou em baixo ela rebate
        ballSpeedY *= -1
    
    if ball.left <= 0:
        playerScore += 1
        ballRestart()
    if ball.right >= screenWidth:
        opponentScore += 1
        ballRestart()

    
    if ball.colliderect(player):
        ballSpeedX *= -1
    if ball.colliderect(opponent): # aqui checo se ela colidiu no player ou no opponent
        ballSpeedX *= -1

def playerAnimation():
    player.y += playerSpeed # aqui movimento o player de acordo com o playerSpeed, que foi alterado nos eventos de teclas

    if player.top <= 0:
        player.top = 0
    if player.bottom >= screenHeight:
        player.bottom = screenHeight

def opponentAnimation():
    if opponent.top < ball.y:
        opponent.top += opponentSpeed
    if opponent.bottom > ball.y:
        opponent.bottom -= opponentSpeed
    if opponent.top <= 0:
        opponent.top = 0
    if opponent.bottom >= screenHeight:
        opponent.bottom = screenHeight
    
def ballRestart():
    global ballSpeedX, ballSpeedY
    ball.center = (screenWidth/2, screenHeight/2)
    time.sleep(1)    
    ballSpeedX *= random.choice((-1, 1))
    ballSpeedY *= random.choice((-1, 1))

while True:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            sys.exit()
        
        if event.type == pygame.KEYDOWN: # aqui checo se alguma tecla foi pressionada
            if event.key == pygame.K_DOWN: # aqui checo se a seta para baixo que foi pressionada
                playerSpeed += 7
            if event.key == pygame.K_UP: # aqui checo se a seta para cima que foi pressionada
                playerSpeed -= 7

        if event.type == pygame.KEYUP: # aqui checo se alguma tecla foi solta 
            if event.key == pygame.K_DOWN: # aqui checo se a seta para baixo que foi solta
                playerSpeed -= 7
            if event.key == pygame.K_UP: # aqui checo se a seta para cima que foi solta
                playerSpeed += 7
        

    ballAnimation()
    playerAnimation()
    opponentAnimation()

    # faço a parte de desenhar na tela
    screen.fill(bgColor)
    pygame.draw.rect(screen, lightGrey, player, border_radius=3)
    pygame.draw.rect(screen, lightGrey, opponent, border_radius=3)
    pygame.draw.ellipse(screen, lightGrey, ball)
    pygame.draw.aaline(screen, lightGrey, (screenWidth/2, 0), (screenWidth/2, screenHeight))

    playerText = gameFonte.render(f'{playerScore}', True, lightGrey) # o texto que quero usar
    rectPlayerText = playerText.get_rect() # aqui apenas pego o retangulo formado pelo texto
    rectPlayerText.center = (screenWidth/2 + 50, screenHeight/2) # aqui centralizo o retangulo na tela deixando um pouco mais para a direita
    screen.blit(playerText, rectPlayerText) # aqui eu desenho o texto na tela

    opponentText = gameFonte.render(f'{opponentScore}', True, lightGrey) # o texto que quero usar
    rectOpponent = opponentText.get_rect() # aqui apenas pego o retangulo formado pelo texto
    rectOpponent.center = (screenWidth/2 - 50, screenHeight/2) # aqui centralizo o retangulo na tela
    screen.blit(opponentText, rectOpponent) # aqui eu desenho o texto na tela

    pygame.display.flip()
    clock.tick(60)


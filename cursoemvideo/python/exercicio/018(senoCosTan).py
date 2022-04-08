from math import sin, cos, tan, radians
a = float(input('Digite o valor do angulo: '))
#para achar o seno, tem que transformar o valor em radiano e depois achar o seno
seno = sin(radians(a))
print('O ângulo de {} tem o seno de {:.2f}'.format(a, seno))
cosseno = cos(radians(a))
print('O ângulo de {} tem o cosseno de {:.2f}'.format(a, cosseno))
tangente = tan(radians(a))
print('O ângulo de {} tem a tangente de {:.2f}'.format(a, tangente))

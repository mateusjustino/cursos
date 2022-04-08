pesoMaior = float(0)
pesoMenor = float(0)
for x in range(1, 6):
    peso = float(input('Digite um peso: '))

    #apenas pra tirar do zero
    if pesoMaior == 0:
        pesoMaior = peso
    if pesoMenor == 0:
        pesoMenor = peso

    if peso > pesoMaior:
        pesoMaior = peso
    if peso < pesoMenor:
        pesoMenor = peso
print('\nO peso maior é {:.2f}Kg.'.format(pesoMaior))
print('O peso menor é {:.2f}Kg.'.format(pesoMenor))

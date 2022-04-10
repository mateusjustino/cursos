carros = ['HRV', 'Polo', 'Jetta', 'Cruze', 'Fusion', 'Golf', 'Focus', 'Onyx', 'Fit']

itCarros = iter(carros)

print(next(itCarros))

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print('Fim da lista')
        break



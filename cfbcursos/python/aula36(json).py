import json

carroJson = '{"marca": "honda", "modelo": "HRV", "cor": "prata"}'            #isso é um json
print(carroJson)

carros = json.loads(carroJson)                       #e aqui converte de json para dictionary
print(carros)
print(carros['marca'])
print(carros['modelo'])

for x, y in carros.items():
    print(f'{x} = {y}')

print()
print()
print()


carrosDictionary = {                    #isso é um dictionary
    "marca": "honda",
    "modelo": "HRV",
    "cor": "prata"
}

carrosJson = json.dumps(carros)         #e aqui converte de dictionary para json

print(carrosJson)


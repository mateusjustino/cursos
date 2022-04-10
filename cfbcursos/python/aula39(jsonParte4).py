import json

#jogadorJ = '{"nome": "Bruno", "time": "aviadores", "vivo": "True", "energia": 100, "mochila": ["pederneira", "corda", "linha", "arame"], "aeronaves": [{"tipo": "transporte", "habilidade": 80}, {"tipo": "ataque", "habilidade": 100}, {"tipo": "reconhecimento", "habilidade": 50}]}'

with open('aula39.json') as f:
  jogador = json.load(f)

'''
  "nome": "Bruno",
  "time": "aviadores",
  "vivo": "True",
  "energia": 100,
  "mochila": ["pederneira", "corda", "linha", "arame"],
  "aeronaves": [
    {"tipo": "transporte", "habilidade": 80},
    {"tipo": "ataque", "habilidade": 100},
    {"tipo": "reconhecimento", "habilidade": 50}
  ]
'''


print('completo')
print(jogador)
print('só o item 0 de aeronaves')
print(jogador['aeronaves'][0])

print('os campos e seus valores')
for x, y in jogador.items():
  print(f'o campo {x} tem: {y}')

print('dentro do campo das aeronaves')
for a in jogador['aeronaves']:
  print(f'{a["tipo"]} - {a["habilidade"]}')



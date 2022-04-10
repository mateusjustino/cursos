import json

jogadorJ = '{"nome": "Bruno", "time": "aviadores", "vivo": "True", "energia": 100, "mochila": ["pederneira", "corda", "linha", "arame"], "aeronaves": [{"tipo": "transporte", "habilidade": 80}, {"tipo": "ataque", "habilidade": 100}, {"tipo": "reconhecimento", "habilidade": 50}]}'

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

jogador = json.loads(jogadorJ)
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



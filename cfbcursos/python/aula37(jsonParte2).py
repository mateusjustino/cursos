import json

carrosDictionary = {
    'marca': 'honda',
    'modelo': 'HRV',
    'cor': 'prata'
}
#dictionary -> objeto json

carrosList = ['honda', 'volkswagem', 'ford', 'fiat', 'chevrolet']
#list -> array json

carrosTupla = ('honda', 'volkswagem', 'ford', 'fiat', 'chevrolet')
#tupla -> array json

carrosJ = json.dumps(carrosDictionary, indent=4, separators=(':', ' = '), sort_keys=True)           # indent para dar um espaço de 4 caracteres
print(carrosJ)                                                                                      # separators muda os separadores
                                                                                                    # sort keys ordena por ordem alfabetica





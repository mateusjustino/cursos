import re            # RegEx

texto = 'Curso de Python do CFB Cursos, canal do Youtube'

res = re.search('carro', texto)

if res != None:
    print(res.start())                # mostra posicao inicial
    print(res.end())                  # mostra posicao final
    print(res.end() - res.start())    # o tamanho da palavra
else:
    print('Não encontrado')






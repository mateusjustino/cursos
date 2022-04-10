import re            # RegEx

texto = 'Curso de Python do CFB Cursos, canal do Youtube'

res = re.sub(',', '.', texto)

print(res)
print(res[2])
for x in res:
    print(f'item: {x}')
print(len(res))







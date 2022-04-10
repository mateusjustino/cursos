import re            # RegEx

texto = 'Curso de Python do CFB Cursos, canal do Youtube'

res = re.split('\s', texto)             # pode usar \s ou só um espaço em branco

print(res)
print(res[2])
for x in res:
    print(f'item: {x}')







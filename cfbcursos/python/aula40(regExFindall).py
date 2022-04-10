import re            # RegEx

texto = 'Curso de Python do CFB Cursos, canal do Youtube'

pesq = str(input('Pesquisar: '))

res = re.findall(pesq, texto);

print(res)
print(f'Quantidade de elementos: {len(res)}')

for x in res:
    print(f'o item: {x}')








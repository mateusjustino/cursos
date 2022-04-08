print("""Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!""")

frase = 'Curso em Vídeo Python'
print(frase)
print('mostra o caracter 9:')
print(frase[9])
print('\n')

print('mostra do 9 até o 13:')
print(frase[9:13])
print('\n')

print('mostra do 9 até o 21 pulando 2 caracter:')
print(frase[9:21:2])
print('\n')

print('mostra até o caracter 5:')
print(frase[:5])
print('\n')

print('mostra do 15 até o fim:')
print(frase[15:])
print('\n')

print('mostra do 9 até o final pulando 3 caracter:')
print(frase[9::3])
print('\n')

print('mostra a quantidade de caracteres:')
print(len(frase))
print('\n')

print('mostra quantas vezes aparece a letra "o":')
print(frase.count('o'))
print('\n')

print('mostra quantas vezes aparece a letra "o" entre o caracter 0 e 13:')
print(frase.count('o', 0, 13))
print('\n')

print('mostra quando em qual caracter começou as letras "deo":')
print(frase.find('deo'))
print('\n')

print('se nao achar as letras retorna -1:')
print(frase.find('Android'))
print('\n')

print('mostra se existe "Curso" na frase:')
print('Curso' in frase)
print('\n')

print('Substitui a palavra "Python" por "Android":')
print(frase.replace('Python', 'Android'))
print('\n')

print('Transforma todas as letras em maiusculo:')
print(frase.upper())
print('\n')

print('Transforma todas as letras em minusculas:')
print(frase.lower())
print('\n')

print('Transforma tudo em minusculo e deixa a primeira em maiusculo:')
print(frase.capitalize())
print('\n')

print('Transforma cada inicial de cada palavra em maiusculo:')
print(frase.title())
print('\n')

print('Remove espaços vazios no começo e no fim:')
frase1 = '   Aprenda Python  '
print(frase1.strip())
print('\n')

print('Remove apenas os espaços vazios no fim (na direita):')
print(frase1.rstrip())
print('\n')

print('Remove apenas os espaços vazios no começo (na esquerda):')
print(frase1.lstrip())
print('\n')

print('Divide a frase em palavras, deixando como se fosse uma lista:')
print(frase.split())
print('\n')

print('Ao pegar uma lista ele mostra o item 0:')
fraseLista = frase.split()
print(fraseLista[0])
print('\n')

print('Ao pegar uma lista ele mostra o item 2 e a letra 3 do item:')
print(fraseLista[2][3])
print('\n')

print('Junta elementos separados e acrescenta o "-":')
print('-'.join(fraseLista))
print('\n')

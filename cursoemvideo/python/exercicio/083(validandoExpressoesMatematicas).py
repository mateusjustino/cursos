expressao = str(input('Digite a expressão: '))

parentesesLista = list()
for parenteses in expressao:
    if parenteses == '(':
        parentesesLista.append('(')
    elif parenteses == ')':
        if len(parentesesLista) > 0:
            parentesesLista.pop()
        else:
            parentesesLista.append(')')
            break
if len(parentesesLista) == 0:
    print('Expressão válida')
else:
    print('Expressão inválida')
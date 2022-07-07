num1 = 10
num2 = 3
divisao = num1 / num2

print(f'{divisao:.2f}') # : significa que vai ter formatação
                        # . pois tera casas decimais
                        # 2 pois quero duas casas decimais
                        # f pois sera um numero float


nome = '123'
print(f'{nome:s}') # aqui apenas afirmando que é uma string


num1 = 1
print(f'{num1:a>10}') # :(caracter)(>, <, ^)(quantidade)(tipo - s, d ou f)
print(f'{num1:b<10}')
print(f'{num1:c^10}')
print(f'{num1:d>10.2f}')

nome = 'Mateus Justino'
print(f'{nome:-^26}')
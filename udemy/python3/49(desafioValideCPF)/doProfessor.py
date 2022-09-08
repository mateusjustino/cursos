cpf = '43416122801'
novoCpf = cpf[:-2]

reverso = 10
total = 0
for index in range(19):
    if index > 8:
        index -= 9

    total += int(novoCpf[index]) * reverso

    reverso -= 1
    if reverso < 2:
        reverso = 11
        d = 11 - (total % 11)

        if d > 9:
            d = 0
        total = 0
        novoCpf += str(d)
    
if cpf == novoCpf:
    print(f'Válido! CPF digitado: {cpf};\n CPF gerado: {novoCpf};')
else:
    print(f'Inválido!\n CPF digitado: {cpf};\n CPF gerado:   {novoCpf};')
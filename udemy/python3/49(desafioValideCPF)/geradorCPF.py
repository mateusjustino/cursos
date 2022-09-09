from random import randint

numero = str(randint(100000000, 999999999))


novoCpf = numero

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
    
print(novoCpf)

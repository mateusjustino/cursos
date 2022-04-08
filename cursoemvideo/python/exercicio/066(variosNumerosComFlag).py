n = count = soma = 0

while True:
    n = int(input('Digite um valor (999 para parar): '))
    if n == 999:
        break
    count += 1
    soma += n

print(f'Foram digitados {count} e a soma entre eles é {soma} ')

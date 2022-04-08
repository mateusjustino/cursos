n = int(input('Digite um valor [999 para parar]: '))
count = 0
somaTotal = 0

while n != 999:
    somaTotal += n
    count += 1
    n = int(input('Digite um valor [999 para parar]: '))


print('Foram digitados {} números e a soma total deles é {}'.format(count, somaTotal))
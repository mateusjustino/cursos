def fizzbuzz(num):
    if (num % 3) == 0 and (num % 5) == 0:
        print('fizzbuzz - divisivel por 3 e 5')
    elif (num % 3) == 0:
        print('fizz - divisivel por 3')
    elif (num % 5) == 0:
        print('buzz - divisivel por 5')    
    else:
        print(f'{num} - não divisivel por 3 ou 5')

fizzbuzz(9)

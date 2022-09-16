def fizzbuzz(num):
    if (num % 3) == 0 and (num % 5) == 0:
        return f'fizzbuzz - divisivel por 3 e 5'
    elif (num % 3) == 0:
        return f'fizz - divisivel por 3'
    elif (num % 5) == 0:
        return 'buzz - divisivel por 5'
    return f'{num} - não divisivel por 3 ou 5'


print(fizzbuzz(15))

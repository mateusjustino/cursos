def func1(funcao):
    return funcao()

def func2():
    return 'Olá mundo!'

var = func1(func2)
print(var)

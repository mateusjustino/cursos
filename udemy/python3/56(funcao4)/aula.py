variavel = 'valor'

def func():
    print(variavel)

def func2(arg=None):    
    arg = arg.replace('v', 'c')
    return arg

func()
outraVariavel = func2(arg=variavel) #assim para mudar globalmente uma variavel dentro da função

print(outraVariavel)

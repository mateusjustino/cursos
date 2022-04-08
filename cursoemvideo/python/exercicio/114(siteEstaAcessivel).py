from urllib import request
site = str(input('Digite um site: '))
try:
    site1 = request.urlopen('https://www.'+site+'/')
except request.URLError:
    print('O Site não está acessível no momento')
else:
    print('O site está acessível!')
    print(site1.read())

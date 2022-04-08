cidade = ' Santo Dummond'
cidadeSeparado = cidade.split()
print('Santo' in cidadeSeparado[0])

#ou assim
#colocando um strip para eliminar espaços e deixando tudo maiusculo
#para conferir independente de como foi escrito
cidadeFormatada = cidade.strip()
print(cidadeFormatada[:5].upper() == 'SANTO')

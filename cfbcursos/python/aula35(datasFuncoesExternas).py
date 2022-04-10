import datetime

data = datetime.datetime.now()
nasce = datetime.datetime(1978, 3, 7)

print(f'{data.day}/{data.month}/{data.year}')

print(nasce.strftime('%A'))                    # dia da semana completo
print(nasce.strftime('%a'))                    # dia da semana abreviado
print(nasce.strftime('%w'))                    # o número do dia da semana     ex: 0 - Domingo, 1 - Segunda, 3 - Terça...
print(nasce.strftime('%W'))                    # o número da semana do ano
print(nasce.strftime('%d'))                    # dia do mes
print(nasce.strftime('%b'))                    # mes completo
print(nasce.strftime('%B'))                    # mes resumido
print(nasce.strftime('%m'))                    # numero do mes
print(nasce.strftime('%y'))                    # ano com os ultimos dois digitos
print(nasce.strftime('%Y'))                    # ano completo
print(nasce.strftime('%H'))                    # sao as horas de 00h até 23h
print(nasce.strftime('%I'))                    # sao as horas de 00h até 12h
print(nasce.strftime('%p'))                    # mostra o AM ou PM da hora
print(nasce.strftime('%M'))                    # mostra os minutos
print(nasce.strftime('%S'))                    # mostra os segundos
print(nasce.strftime('%f'))                    # mostra os microsegundos
print(nasce.strftime('%j'))                    # dia do ano, de 001 - 365











from tkinter import *

def imprimirEsporte():
    ve = vesporte.get()
    if ve == 'f':
        print('Esporte Futebol')
    elif ve == 'v':
        print('Esporte Volei')
    elif ve == 'b':
        print('Esporte Basquete')
    else:
        print('Selecion um Esporte')

app = Tk()
app.title('CFB Curos')
app.geometry('500x300')

vesporte=StringVar()
vcor=StringVar()

blEsportes = Label(app, text='Esportes')
blEsportes.pack()

rbFutebol = Radiobutton(app, text='Futebol', value='f', variable=vesporte)
rbFutebol.pack()

rbVolei = Radiobutton(app, text='Volei', value='v', variable=vesporte)
rbVolei.pack()

rbBasquete = Radiobutton(app, text='Basquete', value='b', variable=vesporte)
rbBasquete.pack()

blCores = Label(app, text='Cores')
blCores.pack()

rbVerde = Radiobutton(app, text='Verde', value='#0f0', variable=vcor)
rbVerde.pack()

rbVermelho = Radiobutton(app, text='Vermelho', value='##f00', variable=vcor)
rbVermelho.pack()

btnEsporte=Button(app, text='Esporte selecionado', command=imprimirEsporte)
btnEsporte.pack()

app.mainloop()

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

listaEsportes = ['Futebol', 'Volei', 'Basquete']

vesporte=StringVar()
vesporte.set(listaEsportes[0])    # para definir o valor padrao

blEsportes = Label(app, text='Esportes')
blEsportes.pack()

opEsportes = OptionMenu(app, vesporte, *listaEsportes)
opEsportes.pack()

btnEsporte=Button(app, text='Esporte selecionado', command=imprimirEsporte)
btnEsporte.pack()

app.mainloop()

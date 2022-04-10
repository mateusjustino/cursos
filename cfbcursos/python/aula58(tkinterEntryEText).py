from tkinter import *

janela = Tk()
janela.title('Cfb Cursos')
janela.geometry('500x300')
janela.configure(background='#dde')

# anchor =>  N = norte, S = sul, E = leste, W = oeste
# NE = nordeste, SE = sudeste, SO = sudoeste, NO = noroeste
Label(janela, text='Nome', background='#dde', foreground='#009', anchor=W).place(x=10, y=10, width=100, height=20)
vnome = Entry(janela)
vnome.place(x=10, y=30, width=200, height=20)

Label(janela, text='Telefone', background='#dde', foreground='#009', anchor=W).place(x=10, y=60, width=100, height=20)
vtelefone = Entry(janela)
vtelefone.place(x=10, y=80, width=200, height=20)

Label(janela, text='Email', background='#dde', foreground='#009', anchor=W).place(x=10, y=110, width=100, height=20)
vemail = Entry(janela)
vemail.place(x=10, y=130, width=200, height=20)

Label(janela, text='OBS', background='#dde', foreground='#009', anchor=W).place(x=10, y=160, width=100, height=20)
vobs = Text(janela)
vobs.place(x=10, y=180, width=200, height=80)



janela.mainloop()

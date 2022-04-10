from tkinter import *
import banco

print(x)

def gravarDados():
    if txtnome.get() != '':
        vnome = txtnome.get()
        vtelefone = txttelefone.get()
        vemail = txtemail.get()
        vobs = txtobs.get('1.0', END)
        vquery = f'insert into tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO, T_OBS) values ("{vnome}", "{vtelefone}", "{vemail}", "{vobs}")'
        banco.dml(vquery)
        txtnome.delete(0, END)
        txttelefone.delete(0, END)
        txtemail.delete(0, END)
        txtobs.delete('1.0', END)
        print('Dados Gravados')
    else:
        print('Erro')

janela = Tk()
janela.title('Cfb Cursos')
janela.geometry('500x300')
janela.configure(background='#dde')

# anchor =>  N = norte, S = sul, E = leste, W = oeste
# NE = nordeste, SE = sudeste, SO = sudoeste, NO = noroeste
Label(janela, text='Nome', background='#dde', foreground='#009', anchor=W).place(x=10, y=10, width=100, height=20)
txtnome = Entry(janela)
txtnome.place(x=10, y=30, width=200, height=20)

Label(janela, text='Telefone', background='#dde', foreground='#009', anchor=W).place(x=10, y=60, width=100, height=20)
txttelefone = Entry(janela)
txttelefone.place(x=10, y=80, width=200, height=20)

Label(janela, text='Email', background='#dde', foreground='#009', anchor=W).place(x=10, y=110, width=100, height=20)
txtemail = Entry(janela)
txtemail.place(x=10, y=130, width=200, height=20)

Label(janela, text='OBS', background='#dde', foreground='#009', anchor=W).place(x=10, y=160, width=100, height=20)
txtobs = Text(janela)
txtobs.place(x=10, y=180, width=200, height=80)

Button(janela, text='Imprimir', command=gravarDados).place(x=10, y=270, width=100, height=20)



janela.mainloop()

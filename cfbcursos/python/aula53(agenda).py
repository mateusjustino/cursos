import os, sqlite3
from sqlite3 import Error

#conexao
def conexaoBanco():
    caminho = 'banco/bdAgenda'
    con = None
    try:
        con = sqlite3.connect(caminho)
    except Error as ex:
        print(ex)
    return con
vcon = conexaoBanco()

def query(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit()
    except Error as ex:
        print(ex)
    finally:
        print('Operação realizada com sucesso')

def consultar(conexao, sql):
    c = conexao.cursor()
    c.execute(sql)
    res = c.fetchall()
    return res


def menuPrincipal():
    print('1 - Inserir Novo Registro')
    print('2 - Deletar Registro')
    print('3 - Atualizar Registro')
    print('4 - Consultar Registros')
    print('5 - Consultar Registro por Nome')
    print('6 - Sair')

def menuInserir():
    nome = input('Nome: ')
    telefone = input('Telefone: ')
    email = input('Email: ')
    vsql = f'insert into tb_contatos (T_NOMECONTATO, T_TELEFONECONTATO, T_EMAILCONTATO) values ("{nome}", "{telefone}", "{email}")'
    query(vcon, vsql)

def menuDeletar():
    vid = input('Digite o ID do registro a ser deletado: ')
    vsql = f'delete from tb_contatos where N_IDCONTATO = {vid}'
    query(vcon, vsql)

def menuAtualizar():
    vid = input('Digite o ID do registro a ser alterado: ')
    r = consultar(vcon, f'select * from tb_contatos where N_IDCONTATO = {vid}')
    rnome = r[0][1]
    rtelefone = r[0][2]
    remail = r[0][3]
    nome = input('Nome: ')
    telefone = input('Telefone: ')
    email = input('Email: ')
    if (len(nome) == 0):
        nome = rnome
    if (len(telefone) == 0):
        telefone = rtelefone
    if (len(email) == 0):
        email = remail
    vsql = f'''update tb_contatos
            set
                T_NOMECONTATO = '{nome}',
                T_TELEFONECONTATO = '{telefone}',
                T_EMAILCONTATO = '{email}'
            where
                N_IDCONTATO = '{vid}'
            '''
    query(vcon, vsql)

def menuConsultar():
    vsql = 'select * from tb_contatos'
    res = consultar(vcon, vsql)
    vlim = 10
    vcont = 0
    for r in res:
        print(f'ID:{r[0]:_<3} Nome: {r[1]:_<30} Telefone: {r[2]:_<14} Email: {r[3]:_<30}')
        vcont += 1
        if (vcont >= vlim):
            vcont = 0
    print('Fim da lista')


def menuConsultarNome():
    vnome = input('Digite o nome: ')
    vsql = f'select * from tb_contatos where T_NOMECONTATO like "%{vnome}%"'
    res = consultar(vcon, vsql)
    vlim = 10
    vcont = 0
    for r in res:
        print(f'ID:{r[0]:_<3} Nome: {r[1]:_<30} Telefone: {r[2]:_<14} Email: {r[3]:_<30}')
        vcont += 1
        if (vcont >= vlim):
            vcont = 0
    print('Fim da lista')


opc = 0
while opc != 6:
    menuPrincipal()
    opc = int(input('Digite uma opção: '))
    if opc == 1:
        menuInserir()
    elif opc == 2:
        menuDeletar()
    elif opc == 3:
        menuAtualizar()
    elif opc == 4:
        menuConsultar()
    elif opc == 5:
        menuConsultarNome()
    elif opc == 6:
        print('Programa finalizado')
    else:
        print('opção inválida')






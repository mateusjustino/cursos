import sqlite3

# cria a conexao
def conexaoBanco():
    caminho = "banco/bdAgenda"
    con = None
    try:
        con = sqlite3.connect(caminho)
    except sqlite3.Error as ex:
        print(ex)
    return con


vcon = conexaoBanco()

# inserir
def inserir(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit()
        print('Registro inserido')
    except sqlite3.Error as ex:
        print(ex)


#nome = input('Nome: ')
#telefone = input('Telefone: ')
#email = input('Email: ')

#vsql = f'''insert into tb_contatos (
#            T_NOMECONTATO,
#            T_TELEFONECONTATO,
#            T_EMAILCONTATO)
#        values('{nome}', '{telefone}', '{email}')'''

#inserir(vcon, vsql)

# deletar
def deletar(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit()
        print('Registro removido')
    except sqlite3.Error as ex:
        print(ex)

vsql = '''delete from
            tb_contatos
        where
               N_IDCONTATO = 2 
                    '''

#deletar(vcon, vsql)

def atualizar(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        conexao.commit()
        print('Registro atualizado')
    except sqlite3.Error as ex:
        print(ex)

vsql = '''update tb_contatos
        set
            T_NOMECONTATO = 'Bruno',
            T_TELEFONECONTATO = '(31)9999-9999',
            T_EMAILCONTATO = 'bruno@email.com'
        where
            N_IDCONTATO = 1'''

#atualizar(vcon, vsql)


def consulta(conexao, sql):
    c = conexao.cursor()
    c.execute(sql)
    resultado = c.fetchall()
    return resultado

vsql = '''select
            *
        from
            tb_contatos'''
res = consulta(vcon, vsql)
for r in res:
    print(r)

print(res[1])


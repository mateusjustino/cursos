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
# cria tabela
vsql = '''create table tb_contatos(
            N_IDCONTATO integer primary key autoincrement,
            T_NOMECONTATO varchar(30),
            T_TELEFONECONTATO varchar(14),
            T_EMAILCONTATO varchar(30)
            );'''

def criarTabela(conexao, sql):
    try:
        c = conexao.cursor()
        c.execute(sql)
        print('Tabela criada')
    except sqlite3.Error as ex:
        print(ex)

criarTabela(vcon, vsql)

vcon.close()






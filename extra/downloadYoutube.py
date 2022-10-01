from pytube import YouTube
import moviepy.editor as mp
import os, time



print('=' * 50)
print('Faça seu Download do Youtube em MP3 ou MP4'. center(50, ' '))
print('=' * 50)

#extensao
ext = input('Escolha a opção desejada: [1] MP3 / [2] MP4: ')
while True:
    if ext not in '12' or ext == '':
        ext = input('Escolha a opção desejada: [1] MP3 / [2] MP4: ')
    else:
        break

print('-' * 50)

#links
links = str(input('Insira um link do Youtube: '))
print('-' * 50)
while True:
    pergunta = input('Deseja adicionar mais? [S/N] ').upper()
    while pergunta not in 'S/N':
        pergunta = input('Deseja adicionar mais? [S/N] ').upper()
    if pergunta == 'N':
        break
    if pergunta == 'S':
        print('-' * 50)
        maisLinks = str(input('Insira mais um link do Youtube: '))
        print('-' * 50)
        links += ' {}'.format(maisLinks)

lista = links.split()

#download
count = 0
for url in lista:
    try:

        print('\nO download irá iniciar...\n')
        if ext == '1':
            title = 'mp3Download'
            video = YouTube(url).streams.get_audio_only()
            video.download("mp3", filename=f'{title}.mp4')
            titname = str(video.title)
            time.sleep(0.5)
            clip = mp.AudioFileClip(rf"mp3/{title}.mp4")
            time.sleep(0.5)
            clip.write_audiofile(rf"mp3/{title}.mp3")
            os.remove(rf"mp3/{title}.mp4")
            try:
                os.rename(rf'mp3/{title}.mp3', rf'mp3/{str(titname)}.mp3')
            except:
                pass
        elif ext == '2':
            print('Fazendo download do MP4, aguarde')
            video = YouTube(url)
            video = video.streams.get_highest_resolution()
            video.download("mp4")
        print('\nVerificando se há mais downloads\n')
        count += 1
        time.sleep(1)

    except:
        print(f'Link inválido! a URL: {url} não existe.')
        print()


#fim
print('=' * 50)
if count == 1:
    print('Seu download foi concluído!'.center(50, ' '))

    if ext == '1':
        print('Seu arquivo está na pasta mp3'.center(50, ' '))
        caminho = os.getcwd()
        print(f'{caminho}/mp3'.center(50, ' '))
    else:
        print('Seu arquivo está na pasta mp4'.center(50, ' '))
        caminho = os.getcwd()
        print(f'{caminho}/mp4'.center(50, ' '))

else:
    print(f'Todos os {count} downloads foram concluídos'.center(50, ' '))

    if ext == '1':
        print('Seus arquivos estão na pasta mp3'.center(50, ' '))
        caminho = os.getcwd()
        print(f'{caminho}/mp3'.center(50, ' '))
    else:
        print('Seus arquivos estão na pasta mp4'.center(50, ' '))
        caminho = os.getcwd()
        print(f'{caminho}/mp4'.center(50, ' '))

print('Programa finalizado'.center(50, ' '))
print('=' * 50)
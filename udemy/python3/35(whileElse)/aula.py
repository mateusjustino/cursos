count = 0

while count < 10:
    print(count)
    count += 1

    if count > 5:
        break
else:
    print('cheguei no else')

print('com o break nem vai pro else')

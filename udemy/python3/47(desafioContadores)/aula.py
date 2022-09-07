count1 = 0
count2 = 10
while count1 < 10:
    count1 += 1
    count2 -= 1
    print(f'Primeiro count: {count1}; Segundo count: {count2}')

print('------------------------------')
for p, r in enumerate(range(10, 1, -1)):
    print(p, r)
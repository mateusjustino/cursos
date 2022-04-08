n = int(input('Digite qual tabuada deseja: '))
for c in range(1, 11):
    print('{} x {:2} = {}'.format(n, c, c*n))
print('fim')
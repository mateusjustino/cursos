let num = [5, 8, 4]
console.log(num)
console.log(`Os valores do vetor são ${num}`)
num[3] = 6      // para adicionar já na posição desejada
console.log(num)
num.push(7)  // para colocar na ultima posição
console.log(num)
console.log(num.length) // mostra quantos elementos tem
num.sort()  // para colocar em ordem
console.log(num)

// para mostrar todos no loop
for (let n = 0; n < num.length; n++){
    console.log(`O ${n}º valor é ${num[n]}`)
}
console.log('ou assimmmmmm')
//ou assim
for (let n in num){
    console.log(`O ${n}º valor é ${num[n]}`)
}

console.log(num.indexOf(7))     // para achar um valor desejado e informar sua posição
let pos = num.indexOf(7)
if (pos == -1) {
    console.log('O valor não foi encontrado')
}
else{
    console.log(`o valor esta na posição ${pos}`)
}

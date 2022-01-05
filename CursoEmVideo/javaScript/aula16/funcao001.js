function parimpar(n) {
    if (n%2 == 0) {
        return 'Par!'
    }
    else {
        return 'Impar!'
    }
}

console.log(parimpar(3))
let res = parimpar(3)
console.log(res)

console.log ('com 2 parametros')

function soma(n1=0, n2=0){    // caso o valor não seja passado considera o '0'
    return n1 + n2
}

console.log(`a soma é ${soma(2)}`)

console.log ('função dentro de uma variavel')
let v = function(x) {
    return x*2
}
console.log(v(5))

console.log ('fatorial')
function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c --) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

console.log('função recursiva, usando uma função dentro dela mesma')
function fatorial1(n) {
    if (n == 1) {
        return 1
    }
    else {
        return n * fatorial1(n-1)
    }
}
console.log(fatorial1(5))
/*
5! = 5 x 4 x 3 x 2 x 1        isso 
5! = 5 x 4!                   é igual a esse
n! = n x (n-1)!               igual a esse tbm

1! = 1
*/
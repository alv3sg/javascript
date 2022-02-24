/*let num = [4, 3, 5]
num[3] = 2 //adicionar no locao 3
num.push(1) //adicionar no ultimo lugar
console.log(num.length) //mostrar comprimento
console.log()
console.log (num)
num.sort() //colocando em ordem
console.log(num)
num.indexOf(4) //Busca o valor 4 no vetor

let num = [1, 2, 3, 4, 5, 6, 7, 8]
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}*/

let num = [1, 2, 3, 4, 5, 6, 7, 8]
let lugar = num.indexOf(10)
console.log(lugar)
for ( let pos in num) {
    console.log (`A posição ${pos} tem o valor ${num[pos]}`)
    
} 
const  prompt = require(`prompt-sync`)()


let id = 0
let jv = 0
let velho = 0 

while ( id >= 0 ) {

id = parseInt(prompt('Insira sua idade: '))

    if (id < 21) {
        jv++
    }
        else if (id>50) {
                 velho++
}
}

console.log(`total de pessoas com menos de 21 anos é de ${jv}`)

console.log(` E com mais de 50 anos é de ${velho}`)
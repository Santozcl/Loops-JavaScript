const prompt = require('prompt-sync')()

let md = 0
let N = 0
let qtd = 0


N = parseInt(prompt('insina numero: '))

do{

    N = parseInt(prompt('insira numero: '))
    
    if (N % 3 == 0){
        md = md + N 
        qtd++
    }

}
while(N != 0)

console.log(`A media dos numeros foi: ${md/qtd}`)
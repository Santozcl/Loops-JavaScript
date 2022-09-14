const prompt = require("prompt-sync")();

let td = 0
let N = 0

N = parseInt(prompt(`Insira um numero: `));

do{
    N = parseInt(prompt('Insira um numero:  '));

    if (N>0){
        
        td += N
    }   
}
    while(N!=0)

console.log(`A soma dos numeros inseridos foi : ${td}`)
const prompt = require(`prompt-sync`)()


let par = 0
let impar = 0

for (let i = 1; i <= 10; i++) {
let n1 = parseInt (prompt('Digite um numero: '));


    if (n1 % 2 == 0) {
    par++

    }
        else if (n1 % 2 == 1) {
        impar++

        }
}
console.log(`Foram digitados ${par}, numeros pares. <br>`);
console.log(`foram digitados  ${impar}, numeros impares <br> `);

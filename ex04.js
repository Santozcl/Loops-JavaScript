const prompt = require("prompt-sync")();

let i = 0;
let Calmas = 0;
let Nervosas = 0;
let calmos = 0;
let Agressivos = 0;
let Nervosos40 = 0;
let Calmos18 = 0;

while (i < 3) {
    const idade = parseInt(prompt(`Digite sua idade: `));

    console.log(`Escolha seu gênero, entre: `);
    console.log(`1   -   Homem\n`);
    console.log(`2   -   Mulher\n`);
    console.log(`3   -   Outro\n`);

    const sexo = parseInt(prompt('Escolha a opção de gênero: '));
    console.log(`Escolha seu humor entre`);
    console.log(`1   -   Calmo\n`);
    console.log(`2   -   Nervoso\n`);
    console.log(`3   -   Agressivo\n`);

    const humor = parseInt(prompt(`Escolha a opção de humor: `));

    if(humor == 1){
        Calmas++;
    }
    if(sexo == 2 && humor==2){
        Nervosas++
    }
    if(sexo == 1 && humor==1){
        calmos++;
    }
    if (humor==3 && sexo ==1){
        Agressivos++
    }
    if (humor==2 && idade>40){
        Nervosos40++
    }
    if(humor==1 && idade <18){
        Calmos18++
    }

    i++;
}
console.log(`\nO total de pessoas calmas é ${Calmas}`);
console.log(`\nO total de mulheres nervosas é ${qNervosas}`);
console.log(`\nO total de OUTROS calmes é ${calmos}`);
console.log(`\nO total de homens agressivos é ${Calmas}`);
console.log(`\nO total de pessoas nervosas acima dos 40 anos é ${Nervosos40}`);
console.log(`\nO total de pessoas calmas acima dos 18 é ${Calmos18}`);




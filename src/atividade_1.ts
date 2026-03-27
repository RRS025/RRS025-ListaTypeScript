// Crie um programa que receba um número e informe se ele é positivo, negativo ou zero.

let numero:number //tipagem com letra minusculo

numero = Number(prompt("Digite um número:")) //

if (numero > 0){
    console.log(`Positivo`)
}else if (numero < 0){
    console.log(`Negativo`)
}else{
    console.log(`ZERO`)
}
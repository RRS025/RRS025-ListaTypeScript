export function exercicio_01(): any{
    let nuemero:number 
    nuemero = Number(prompt(`Informe um número para confirmar se o número é par ou impar, negativo: `))
    console.log(nuemero%2==0 ? "Par" : "Impar")
    console.log(nuemero == 0 ? "Zero" : nuemero > 0 ? "Positivo" : "Negativo")

}
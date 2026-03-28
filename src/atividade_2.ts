// Crie uma função que receba um número e retorne se ele é par ou ímpar.




function par_impar(entrada:number): any{
    if (entrada %2 == 0){
        return alert(`Par`)
    }else{
        return alert(`Impar`)
    }
}
let entrada:number

entrada = Number(prompt(`Informe um número inteiro:`))

par_impar(entrada)
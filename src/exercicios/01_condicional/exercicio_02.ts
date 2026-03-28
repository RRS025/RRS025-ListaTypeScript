// export function exercicio_02() {
    function estacoes(mes:number): any{
        return console.log(mes > 0 && mes <= 3 ? "Verão": mes> 3 && mes <= 6 ? "Outono" : mes > 6 && mes <= 9 ? "Inverno" : mes > 9 && mes <=12 ? "Primavera" : "Erro" )
    }
let mes:number
mes = Number(prompt(`Informe o mês para saber a estação do ano: `))
estacoes(mes)

// }
function aumentoSalario (nome,porcento,salario){
    
let valorDecimal = parseFloat(porcento) / 100
aumento = salario * valorDecimal
novoSalario = salario + aumento

    if ( novoSalario >= 3000 ) {
             console.log(`Olá ${nome} após o seu aumento de ${porcento} o seu novo salário é ${novoSalario} e será necessário declar o imposto de renda.`)
    } else {
             console.log(`Olá ${nome} após o seu aumento de ${porcento} o seu novo salário é ${novoSalario} e não precisará declar o imposto de renda.`)
    }
}
aumentoSalario('Atila','18%',2800)
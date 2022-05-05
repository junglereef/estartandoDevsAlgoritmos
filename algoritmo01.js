function validacaoIdade(nome,idade){
if ( idade >= 18) {
    console.log(`${nome} tem ${idade} anos por isso é maior de idade`)
} else {
    console.log (`${nome} tem ${idade} anos por isso não é maior de idade`)
}
}

validacaoIdade('atila',15)
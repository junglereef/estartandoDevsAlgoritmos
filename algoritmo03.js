function mediaAluno(nome,historia,ingles,portugues){
    const media =  Math.round((historia + ingles + portugues) / 3);
    
    if( media >= 8 ){
        console.log(`Parabéns ${nome} você foi aprovado com uma média de ${media}`)
    } else {
        console.log(`Infelizmente ${nome} você não foi aprovado a sua média foi de ${media}`)
    }
}

mediaAluno('Atila',8,7,8)
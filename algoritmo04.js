
/*Criar a função (inverter) que recebe uma string e retorna um inverso dela “salve” => “evlas”*/

// function inverterString(str) {
//     // Usar o método split() para criar um novo array com as letras da palavra
//     var separaString = str.split("");
 
//     // Usar o método reverse() para inverter as letras dentro do array 
//     var inverteArray = separaString.reverse();
 
//     // Usar o método join() para juntar as letras do array em uma string
//     var juntaArray = inverteArray.join(""); 
    
//     //retornar a  string
//     return juntaArray; 
// }
 




function inverterString(str){  
    let invertida = "";      
     for (let i = str.length - 1; i >= 0; i--){         
        invertida += str[i];  
     }     
    return invertida;
  }
  console.log(inverterString("palíndromo"))
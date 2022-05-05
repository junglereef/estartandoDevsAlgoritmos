/*
Extra: Criar a função (fazerRelatorio) que recebe uma string e retorna um objeto com a própria string, o inverso da string e quantas vogais ela tem “salve” => { palavra: “salve”, palavraInverso: “evlas”, numeroVogais: 2 }
Extra2: Se receber algo diferente de string da um console.log(“oh carai”) e retorna undefined
*/

function fazerRelatorio(str) {

  if (typeof str == 'string') {

      function inverterString(str) {
        let invertida = "";
        for (let i = str.length - 1; i >= 0; i--) {
          invertida += str[i];
        }
        return invertida;
      }

      function contarNumeroVogais(str) {
        let contagem = 0;
        let vogaisMin = ['a', 'e', 'i', 'o', 'u'];
        let vogaisMaisc = vogaisMin.map(vogaisMin => vogaisMin.toUpperCase());
        let vogais = vogaisMin.concat(vogaisMaisc);
        for (let char of str) {
          if (vogais.includes(char)) {
            contagem++
          }
        }
        return contagem
      };

      const newStr = {
        "palavra": str,
        "palavraInverso": inverterString(str),
        "numeroVogais": contarNumeroVogais(str)
      };

      console.log(newStr)

  } else {

      return undefined
      console.log(`oh carai`)
  } 
}
fazerRelatorio('Marco Aurelio')
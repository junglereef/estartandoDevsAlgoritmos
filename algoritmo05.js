/*Criar a função (contarNumeroVogais) que recebe uma string e retorna o número de vogais que ela tem (maiusculas e minusculas) “salve” => 2*/

    function contarNumeroVogais (str) {
        let contagem = 0;
        let vogaisMin = ['a','e','i','o','u'];
        let vogaisMaisc = vogaisMin.map(vogaisMin => vogaisMin.toUpperCase());
        let vogais =  vogaisMin.concat(vogaisMaisc);
        for (let char of str){
            if (vogais.includes(char)){
                contagem++
            }
        }
        
        return console.log(contagem)
      };

      contarNumeroVogais ('Valentina')


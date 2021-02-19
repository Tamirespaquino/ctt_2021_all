// 1. Escreva uma função chamada diferenca que retorne a diferença de dois números. Dúvida: como sempre retornar um número positivo?

function diferenca(num1, num2) {
    var resultado = num1 - num2;
    if((resultado) < 0) {
        return "Diferença não é positiva";
    } else {
        return resultado;
    }
}

//2. Escreva uma função que retorne o quadrado de um número. Dúvida: como retorna a potência de a por b?

function quadrado(num) {
    return num ** 2;
}

function potencia(num1, num2){
    return num1 ** num2;
}

//3. Escreva uma função que retorne a raiz quadrada de um número

function raiz(num1){
    return num1 ** 0.5;
}

//4. Escreva uma função que, dada uma lista de numeros inteiros, retorne o menor número

function listaDeNumeros(lista){
   //var lista = []; ==> NÃO declarar o parâmetro porque ele perde o valor que vc deu e inicializa
   //com o valor declarado

   function listaDeNumeros(lista){
    var menor = lista[0];
    for(var i = 1; i < lista.length; i++){
        if(lista[i] < menor) {
        menor = lista[i];
        } 
    }
     return menor;
  }


/* Resolução professor:
function buscaMenor(array){
  var menor = array[0];
  console.log('Declarei menor com o valor'+menor);
  for( var posicao = 0; posicao < array.length; posicao++){
     console.log('Vamos ver se o numero '+array[posicao]+' da posicao '+posicao+' é menor do que '+menor)
     if( array[posicao] < menor){
        console.log('É menor')
        menor = array[posicao];
        console.log('Atribuí '+menor+' à variável menor')
     } else {
        console.log('Não é menor');
     }
  }
  console.log('Vou retornar menor com o valor '+menor)
  return menor;
}*/

//5. Escreva uma função que, dada uma lista de numeros inteiros, retorne o maior número

function inteiros(lista) {
    var maior = lista[0];

    for(var i = 1; i < lista.length; i++) {
        if(lista[i] > maior){
            maior = lista[i];
        }
    }
    return maior;
}

//6. Escreva uma função que, dada uma lista de numeros inteiros, retorne a soma

function somaDosNumeros(lista) {
    var soma = 0;
    for(var i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}

//7. Escreva uma função que, dados os três lados de um triângulo, calcula o seu perímetro

function perimetro(num1, num2, num3){
    var soma = 0;
    soma = num1 + num2 + num3;
    return soma;
}

//8. Escreva uma função que, dado o raio de um círculo, calcule a sua área. Considere pi = 22/7

function areaCirculo(raio) {
    var area = 0;
    var pi = 22/7;

    area = pi*raio**2;
    return area;
}

//9. Escreva uma função que, dada uma String, imprima essa String ao contrário


Considere as funções chartAt de String e a lógica abaixo:
function inverter(vetor){
  console.log('Criei um array vazio');
  resultado = [];
  console.log('Criei a variavel posicao que recebeu o valor '+vetor.length-1);
  posicao = vetor.length - 1;
  console.log('Enquanto posicao for maior ou igual a 0')
  while ( posicao >= 0 ){
    console.log('Adiciono ao resultado o valor '+vetor[posicao]+' presente na posicao '+posicao)
    resultado.push(vetor[posicao]);
    console.log('Subtraio um de posicao resultado em '+posicao-1)
    posicao--;
  }
  console.log("Retorno o resultado com "+resultado) 
  return resultado;
} 

string_resultado = resultado.join(‘’)


//10. (Fazer depois do 13) Escreva uma função que, dados dia, mês e ano, calcula quantos dias faltam para o próximo natal

//11. Escreva uma função que converta graus Farenheit para Celsius. Considere que (F − 32) × 5/9 = C

//12. Escreva uma função que converta graus Celsius para Farenheit. Considere que (F − 32) × 5/9 = C

//13. Escreva uma função que verifica se um ano é bissexto. Considere que anos múltiplos de 4 e que não sejam múltiplos de 100 são bissextos. ()

//14. Escreva uma função que, dados dia, mês e ano, calcula quantos dias do ano se passaram até essa data. Exemplo: dia 02/02/2021 será o dia 33 do ano.

//15. Escreva uma função que valide se uma string é um palíndromo.

/*16. Crie um objeto chamado calculadora, com as funções:
soma(numero1, numero2) que retorna a soma dos dois números;
diferenca(numero1, numero2) que retorna a diferença dos dois números;
multiplicacao(numero1, numero2) que retorna a multiplicação dos dois números;
divisao(numero1, numero2) que retorna a divisão dos dois números;
Execute as quatro operações a partir desse objeto*/

//17. Crie uma funcao que, dado um numero entre 0 e 9, informa se ele é par ou impar. Use como referência o código abaixo:


function ePar(numero){
switch (numero) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 8:
         console.log('É par);
         break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
         console.log('É impar);
         break;
    default:
         console.log('Nao conheco');
}
}

//18. Para o Objeto usuario abaixo, crie validações para o ano, o mês e o dia. 


// <<<<<<<Ejercicio 1.1>>>>>>>

// **Iteración #1: Buscar el máximo**

// Completa la función que tomando dos números como argumento devuelva el más alto.

console.log(" Ejercicio 1")

function sum(numberOne , numberTwo) {

    if (numberOne > numberTwo) {
        return numberOne
        
    }
    else {
        if (numberTwo > numberOne) {
            return numberTwo
            
        }
    }
}

console.log(sum(5,6));


  // <<<<<<<Ejercicio 1.2>>>>>>>



  //   **Iteración #2: Buscar la palabra más larga**

//   Completa la función que tomando un array de strings como argumento devuelva el más largo, 
// en caso de que dos strings tenga la misma longitud deberá devolver el primero.
  
//   Puedes usar este array para probar tu función:

console.log(" Ejercicio 2")

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    
let word="";

    for (let i=0; i < param.length; i++) {

       if (param[i].length > word.length){  
            word = param[i];
       } 
       
    }
return word
}

console.log(findLongestWord(avengers));

  // <<<<<<<Ejercicio 1.3>>>>>>>
//   **Iteración #3: Calcular la suma**

//   Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//   Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
  
//   Puedes usar este array para probar tu función:

console.log(" Ejercicio 3")

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param){

    let total=0;

    for (let i=0; i < param.length; i++) {

             total += param[i];
        
        } 

    return total
}

console.log(sumAll(numbers));



  // <<<<<<<Ejercicio 1.4>>>>>>>

//   **Iteración #4: Calcular el promedio**

//   Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

console.log(" Ejercicio 4")

const numbers2 = [12, 21, 38, 5, 45, 37, 6];
function average(param) {

    
        let sum=0;
        for (let i=0; i < param.length; i++) {
    
                 sum += param[i];

            } 
    
        return sum / param.length;
  
        }

 console.log(average(numbers2));


  // <<<<<<<Ejercicio 1.5>>>>>>>

//   **Iteración #5: Calcular promedio de strings**

//   Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y 
// de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
console.log(" Ejercicio 5")

  const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

  function averageWord(param) {

let suma2=0;

    for (let i=0; i < param.length; i++) {
    
        if (typeof param[i] == "number" ){
            suma2 += param[i]
        }
      else{
        suma2 += param[i].length
      }
   } 
return suma2
}

console.log(averageWord(mixedElements));



  // <<<<<<<Ejercicio 1.6>>>>>>>

// **Iteración #6: Valores únicos**

// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
//  en caso que existan los elimina para retornar un array sin los elementos duplicados. 
// Puedes usar este array para probar tu función:

console.log(" Ejercicio 6")

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {

let a="";

    for (let i=0; i < param.length; i++) {

        for(let j=i+1; j< param.length; j++){

            if (param[i] === param [j]) {

                param.splice(j,1)
            }

        }

    } 
return param

}

console.log(removeDuplicates(duplicates))
  


  // <<<<<<<Ejercicio 1.7>>>>>>>

//   **Iteración #7: Buscador de nombres**

// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
// comprueba si existe el elemento, en caso que existan nos devuelve un true
//  y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

console.log(" Ejercicio 7")

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param,buscar) {

    for (let i=0; i< param.length; i++){

        if (param[i] === buscar){

        return true

        } else {

            return false
        }

    }
    
  }
let result= finderName(nameFinder,"Peter");

console.log(result);

  // <<<<<<<Ejercicio 1.8>>>>>>>

//   **Iteration #8: Contador de repeticiones**

// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
//   Puedes usar este array para probar tu función:
console.log(" Ejercicio 8");

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(list) {
    let auxList = [];
    list.forEach((item) => {
      if (!auxList.includes(item)) {
        auxList.push(item);
      }
    });

    //Crear un objeto para guardar la ocurrencia y su número.

    let counter = 0;
    let auxObject = {};

    auxList.forEach((itemUnique) => {
      list.forEach((itemList) => {
        if (itemUnique == itemList) counter++;
      });
      auxObject[itemUnique] = counter;
      counter = 0;
    });
    return auxObject;

    }

    console.log(repeatCounter(counterWords));

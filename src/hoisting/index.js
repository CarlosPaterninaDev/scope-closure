// Elevamiento de las declaraciones de las variables y para las funciones

a = 2;
var a;
console.log(a);


// Ejecutar por aparte
console.log(a);
var a = 2;    // Notamos que JS solo utiliza Hoisting en declaraciones y NO en las inicializaciones


nameOfDog('Trufa');


function nameOfDog(name) {

  console.log(name);
  
}

// nameOfDog('Trufa');
